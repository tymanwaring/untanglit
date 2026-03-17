import ExcelJS from 'exceljs';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function extractLeads(xml) {
  const leads = [];
  const leadBlocks = xml.match(/<lead>([\s\S]*?)<\/lead>/g) || [];
  const fields = [
    'business','businessType','phoneNumber','link','websiteLink',
    'leadQuality','status','trustScore','websitePlatform','mobileScore',
    'recommendedService','contactName','email','followUpDate','area',
    'pitchHook','dateContacted','notes'
  ];
  for (const block of leadBlocks) {
    const row = {};
    for (const f of fields) {
      const m = block.match(new RegExp(`<${f}>(.*?)</${f}>`, 's'));
      row[f] = m ? m[1].trim() : '';
    }
    leads.push(row);
  }
  return leads;
}

const xmlText = readFileSync(resolve(__dirname, 'leads.xml'), 'utf8');
const leads = extractLeads(xmlText);

const COLUMNS = [
  { key: 'business',          header: 'Business',             width: 28 },
  { key: 'businessType',      header: 'Business Type',        width: 22 },
  { key: 'phoneNumber',       header: 'Phone',                width: 16 },
  { key: 'area',              header: 'Area',                 width: 14 },
  { key: 'leadQuality',       header: 'Lead Quality',         width: 14 },
  { key: 'status',            header: 'Status',               width: 18 },
  { key: 'trustScore',        header: 'Trust Score',          width: 12 },
  { key: 'recommendedService',header: 'Recommended Service',  width: 24 },
  { key: 'websitePlatform',   header: 'Platform',             width: 22 },
  { key: 'mobileScore',       header: 'Mobile Score',         width: 14 },
  { key: 'contactName',       header: 'Contact Name',         width: 16 },
  { key: 'email',             header: 'Email',                width: 28 },
  { key: 'followUpDate',      header: 'Follow-Up Date',       width: 16 },
  { key: 'dateContacted',     header: 'Date Contacted',       width: 16 },
  { key: 'websiteLink',       header: 'Website',              width: 32 },
  { key: 'link',              header: 'Lead Source Link',     width: 32 },
  { key: 'pitchHook',         header: 'Pitch Hook',           width: 55 },
  { key: 'notes',             header: 'Notes',                width: 70 },
];

const HEADER_BG   = '1E293B';
const HEADER_FONT = 'FFFFFF';
const ROW_EVEN    = 'F1F5F9';
const ROW_ODD     = 'FFFFFF';

const QUALITY_COLORS = {
  'High':   { bg: 'DCFCE7', font: '166534' },
  'Medium': { bg: 'FEF9C3', font: '854D0E' },
  'Low':    { bg: 'FEE2E2', font: '991B1B' },
};
const STATUS_COLORS = {
  'Not contacted':  { bg: 'E2E8F0', font: '334155' },
  'Contacted':      { bg: 'DBEAFE', font: '1E40AF' },
  'Interested':     { bg: 'DCFCE7', font: '166534' },
  'Current Client': { bg: 'A7F3D0', font: '065F46' },
  'Denied':         { bg: 'FEE2E2', font: '991B1B' },
  'Verify Active':  { bg: 'FFEDD5', font: '9A3412' },
};
const SERVICE_COLORS = {
  'Maintenance ($99/mo)':  { bg: 'EDE9FE', font: '5B21B6' },
  'Build-Small ($2,000)':  { bg: 'DBEAFE', font: '1E40AF' },
  'Build-Medium ($8,500)': { bg: 'FEF3C7', font: '92400E' },
  'Build-Large ($19,500)': { bg: 'FFE4E6', font: '9F1239' },
};

function applyFill(cell, bgHex) {
  cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + bgHex } };
}
function applyFont(cell, hex, bold = false) {
  cell.font = { ...cell.font, color: { argb: 'FF' + hex }, bold };
}

const wb = new ExcelJS.Workbook();
wb.creator = 'Untanglit';
wb.created = new Date();

const ws = wb.addWorksheet('Leads', { views: [{ state: 'frozen', ySplit: 1 }] });
ws.columns = COLUMNS.map(c => ({ key: c.key, width: c.width }));

const headerRow = ws.addRow(COLUMNS.map(c => c.header));
headerRow.height = 22;
headerRow.eachCell(cell => {
  applyFill(cell, HEADER_BG);
  applyFont(cell, HEADER_FONT, true);
  cell.alignment = { vertical: 'middle', horizontal: 'center' };
  cell.border = { bottom: { style: 'medium', color: { argb: 'FF0F172A' } } };
});
ws.autoFilter = { from: 'A1', to: `${String.fromCharCode(64 + COLUMNS.length)}1` };

leads.forEach((lead, idx) => {
  const row = ws.addRow(COLUMNS.map(c => lead[c.key] ?? ''));
  row.height = 18;
  const baseBg = idx % 2 === 0 ? ROW_EVEN : ROW_ODD;

  row.eachCell({ includeEmpty: true }, (cell, colNum) => {
    const colKey = COLUMNS[colNum - 1]?.key;
    applyFill(cell, baseBg);
    cell.alignment = { vertical: 'top', wrapText: colKey === 'notes' || colKey === 'pitchHook' };
    cell.font = { size: 10, color: { argb: 'FF1E293B' } };
  });

  const qIdx = COLUMNS.findIndex(c => c.key === 'leadQuality') + 1;
  const qCell = row.getCell(qIdx);
  const qc = QUALITY_COLORS[lead.leadQuality];
  if (qc) { applyFill(qCell, qc.bg); applyFont(qCell, qc.font, true); }
  qCell.alignment = { vertical: 'middle', horizontal: 'center' };

  const sIdx = COLUMNS.findIndex(c => c.key === 'status') + 1;
  const sCell = row.getCell(sIdx);
  const sc = STATUS_COLORS[lead.status];
  if (sc) { applyFill(sCell, sc.bg); applyFont(sCell, sc.font); }
  sCell.alignment = { vertical: 'middle', horizontal: 'center' };

  const svIdx = COLUMNS.findIndex(c => c.key === 'recommendedService') + 1;
  const svCell = row.getCell(svIdx);
  const svc = SERVICE_COLORS[lead.recommendedService];
  if (svc) { applyFill(svCell, svc.bg); applyFont(svCell, svc.font, true); }
  svCell.alignment = { vertical: 'middle', horizontal: 'center' };

  const tIdx = COLUMNS.findIndex(c => c.key === 'trustScore') + 1;
  const tCell = row.getCell(tIdx);
  tCell.alignment = { vertical: 'middle', horizontal: 'center' };
  tCell.font = { bold: true, size: 11, color: { argb: 'FF1E293B' } };

  const wIdx = COLUMNS.findIndex(c => c.key === 'websiteLink') + 1;
  const wCell = row.getCell(wIdx);
  if (lead.websiteLink) {
    wCell.value = { text: lead.websiteLink, hyperlink: lead.websiteLink };
    wCell.font = { color: { argb: 'FF1D4ED8' }, underline: true, size: 10 };
  }
});

// Summary sheet
const summary = wb.addWorksheet('Summary');
summary.columns = [{ key: 'label', width: 30 }, { key: 'value', width: 12 }];

const summaryData = [
  ['Total Leads', leads.length],
  ['', ''],
  ['── By Lead Quality ──', ''],
  ['High', leads.filter(l => l.leadQuality === 'High').length],
  ['Medium', leads.filter(l => l.leadQuality === 'Medium').length],
  ['Low', leads.filter(l => l.leadQuality === 'Low').length],
  ['', ''],
  ['── By Status ──', ''],
  ['Not Contacted', leads.filter(l => l.status === 'Not contacted').length],
  ['Contacted', leads.filter(l => l.status === 'Contacted').length],
  ['Interested', leads.filter(l => l.status === 'Interested').length],
  ['Current Client', leads.filter(l => l.status === 'Current Client').length],
  ['Denied', leads.filter(l => l.status === 'Denied').length],
  ['Verify Active', leads.filter(l => l.status === 'Verify Active').length],
  ['', ''],
  ['── By Service ──', ''],
  ['Maintenance ($99/mo)', leads.filter(l => l.recommendedService === 'Maintenance ($99/mo)').length],
  ['Build-Small ($2,000)', leads.filter(l => l.recommendedService === 'Build-Small ($2,000)').length],
  ['Build-Medium ($8,500)', leads.filter(l => l.recommendedService === 'Build-Medium ($8,500)').length],
  ['Build-Large ($19,500)', leads.filter(l => l.recommendedService === 'Build-Large ($19,500)').length],
  ['', ''],
  ['── By Area ──', ''],
  ['Spokane/509', leads.filter(l => l.area === 'Spokane/509').length],
  ['Tacoma/253', leads.filter(l => l.area === 'Tacoma/253').length],
  ['Other', leads.filter(l => l.area === 'Other').length],
];

for (const [label, value] of summaryData) {
  const row = summary.addRow({ label, value });
  if (typeof label === 'string' && label.startsWith('──')) {
    row.getCell('label').font = { bold: true, color: { argb: 'FF1E293B' } };
    row.getCell('label').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE2E8F0' } };
    row.getCell('value').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE2E8F0' } };
  } else if (label === 'Total Leads') {
    row.getCell('label').font = { bold: true, size: 13 };
    row.getCell('value').font = { bold: true, size: 13 };
  } else if (typeof value === 'number') {
    row.getCell('value').alignment = { horizontal: 'center' };
  }
}

await wb.xlsx.writeFile(resolve(__dirname, 'leads.xlsx'));
console.log(`XLSX: ${leads.length} leads written`);
