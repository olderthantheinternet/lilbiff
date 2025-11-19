# Custom Domain Setup for lilbiff.com

## GitHub Pages Configuration

1. Go to: `https://github.com/olderthantheinternet/lilbiff/settings/pages`
2. Under "Custom domain", enter: `lilbiff.com`
3. Click **Save**
4. Wait for DNS to propagate, then check **"Enforce HTTPS"**

## Namecheap DNS Configuration

### A Records (for apex domain - lilbiff.com)

Add these 4 A records in Namecheap Advanced DNS:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

### CNAME Record (for www.lilbiff.com - optional)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | olderthantheinternet.github.io | Automatic |

## Important Notes

- ⚠️ **Remove any existing A or CNAME records** for @ that point elsewhere
- ⏱️ DNS propagation can take 24-48 hours (usually 1-2 hours)
- ✅ After DNS propagates, enable "Enforce HTTPS" in GitHub Pages settings
- 🔍 Check DNS propagation: https://dnschecker.org

## Verification

Once DNS propagates:
- ✅ `https://lilbiff.com` should load your site
- ✅ `https://www.lilbiff.com` should also work (if CNAME added)
- ✅ HTTPS will be automatically enabled by GitHub

## Troubleshooting

**Site not loading after 24 hours?**
1. Verify DNS records in Namecheap match exactly
2. Check GitHub Pages settings show "DNS check successful"
3. Clear browser cache
4. Try incognito/private browsing mode

**HTTPS not working?**
- Wait 24 hours after DNS propagation
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- GitHub automatically provisions SSL certificates via Let's Encrypt

## GitHub Pages IP Addresses (Current as of 2024)

These are GitHub's Pages server IPs. If these change, GitHub will update their documentation:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**Reference:** [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

