const paths=[
'<path d="m5 16 3-8h16l3 8M5 16h22v9H5zM8 25v3m16-3v3M5 19h4m14 0h4M10 12h12"/>',
'<circle cx="7" cy="23" r="5"/><circle cx="25" cy="23" r="5"/><path d="m7 23 7-12h7l4 12M14 11l-4-3H6m15 3 1-6h-4M7 23h11l3-12"/>',
'<path d="M3 8h17v17H3zM20 14h5l4 6v5h-9M23 16v5h6"/><circle cx="8" cy="25" r="3"/><circle cx="24" cy="25" r="3"/>',
'<path d="M16 28S3 20 3 12c0-7 9-10 13-3 4-7 13-4 13 3 0 8-13 16-13 16Z"/><path d="M16 12v9m-4-4h8"/>',
'<circle cx="16" cy="8" r="4"/><path d="M9 25v-5c0-8 14-8 14 0v5M3 26v-4c0-5 4-7 7-5m19 9v-4c0-5-4-7-7-5"/><circle cx="6" cy="12" r="3"/><circle cx="26" cy="12" r="3"/>',
'<path d="M4 28V12l12-8 12 8v16H4ZM12 28V18h8v10M8 13h2m12 0h2M8 18h2m12 0h2M8 23h2m12 0h2"/>'
];
module.exports=paths.map(p=>'<svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>');
