import re
with open(r"C:\Users\Pragya\Farm-Chronicle\live-mirror\assets\index-BTSIYRpt.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Find all URLs (absolute and relative) referencing images
urls = re.findall(r'(https?://[^"\'\\s\)]*\.(?:jpg|jpeg|png|gif|svg|webp|ico))', content, re.IGNORECASE)
for u in sorted(set(urls)):
    print(f"ABS: {u}")

# Find relative paths
paths = re.findall(r'["\'](/[^"\'\\s\)]*\.(?:jpg|jpeg|png|gif|svg|webp|ico))["\']', content, re.IGNORECASE)
for p in sorted(set(paths)):
    print(f"REL: {p}")

paths2 = re.findall(r'["\'](\./[^"\'\\s\)]*\.(?:jpg|jpeg|png|gif|svg|webp|ico))["\']', content, re.IGNORECASE)
for p in sorted(set(paths2)):
    print(f"CUR: {p}")

# Check for import.meta.url or dynamic paths
dynamic = re.findall(r'["\'](/assets/[^"\'\\s\)]*)["\']', content)
for p in sorted(set(dynamic)):
    print(f"ASSET: {p}")
