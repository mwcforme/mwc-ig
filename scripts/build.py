"""Build a self-contained HTML studio using only Python's standard library."""
from pathlib import Path
import base64
import json

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
    mime = 'image/png' if path.suffix == '.png' else 'image/jpeg'
    return f'data:{mime};base64,' + base64.b64encode(path.read_bytes()).decode('ascii')

def main() -> None:
    # The order matches the photo labels in src/studio.js.
    assets = {name: data_url(ROOT / 'assets/campaigns' / f'{name}.jpg') for name in CAMPAIGNS}
    assets['brand'] = data_url(ROOT / 'assets/brand/mwc-navy.png')
    html = (ROOT / 'src/studio.html').read_text(encoding='utf-8')
    html = html.replace('__ASSETS__', json.dumps(assets))
    html = html.replace('__STUDIO_JS__', (ROOT / 'src/studio.js').read_text(encoding='utf-8'))
    (ROOT / 'index.html').write_text(html, encoding='utf-8')
    print('Built index.html')

if __name__ == '__main__':
    main()
