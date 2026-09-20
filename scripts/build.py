"""Build a self-contained HTML studio using only Python's standard library."""
from pathlib import Path
import base64
import json
import mimetypes

ROOT = Path(__file__).resolve().parent.parent
CAMPAIGNS = [
    'fathers-day-fathers-day-slide-2',
    'fathers-day-fathers-day-slide-4',
    'fathers-day-fd-slide-1-beach',
    'fathers-day-fd-slide-3-patio',
    'mwc-250-slide-1',
    'mwc-250-slide-2',
    'mwc-250-slide-3',
    'mwc-250-slide-4',
]

def data_url(path: Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    return f'data:{mime};base64,' + base64.b64encode(path.read_bytes()).decode('ascii')

def main() -> None:
    # The order matches the photo labels in src/studio.js.
    assets = {name: data_url(ROOT / 'assets/campaigns' / f'{name}.jpg') for name in CAMPAIGNS}
    assets['brand'] = data_url(ROOT / 'assets/brand/mwc-navy.png')
    for path in sorted((ROOT / 'assets/clinic').glob('*.jpg')):
        assets['clinic-' + path.stem] = data_url(path)
    stock = json.loads((ROOT / 'assets/stock/manifest.json').read_text())
    for item in stock:
        assets[item['key']] = data_url(ROOT / 'assets/stock' / item['name'])
    html = (ROOT / 'src/studio.html').read_text(encoding='utf-8')
    html = html.replace('__ASSETS__', json.dumps(assets))
    html = html.replace('__PHOTO_LABELS__', json.dumps({i['key']: i['label'] for i in stock}))
    html = html.replace('__REFERENCES__', json.dumps({p.stem: data_url(p) for p in (ROOT / 'assets/references').glob('*.png')}))
    html = html.replace('__OSWALD__', data_url(ROOT / 'assets/fonts/Oswald.ttf'))
    html = html.replace('__LOGO_NAVY__', data_url(ROOT / 'assets/brand/wordmark_navy.svg'))
    html = html.replace('__LOGO_WHITE__', data_url(ROOT / 'assets/brand/wordmark_white.svg'))
    html = html.replace('__STUDIO_JS__', (ROOT / 'src/studio.js').read_text(encoding='utf-8'))
    html = html.replace('__COMPLIANCE_JS__', (ROOT / 'src/compliance.js').read_text(encoding='utf-8'))
    (ROOT / 'index.html').write_text(html, encoding='utf-8')
    print('Built index.html')

if __name__ == '__main__':
    main()
