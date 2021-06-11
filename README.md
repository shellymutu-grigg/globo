# Globo
Personal project to implement spinning globe using D3.js implementation.  

## Still to do
1. Complete D3 tutorial https://www.tutorialsteacher.com/d3js/select-dom-element-using-d3js
2. Incorporate existing D3 implementation for spinning globe
3. Incorporate pin drops
4. Incorporate colour into the globe
5. Design database for travel recommendations?


CORS issue:

const csp = `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com/ https://www.google-analytics.com/; style-src 'self' 'unsafe-inline'; img-src 'self' data: http://www.google-analytics.com/ https://www.google.com/ https://www.google.co.nz/; object-src 'self' data:; connect-src 'self'  *.aa.co.nz https://www.google-analytics.com/ https://stats.g.doubleclick.net/ ${process.env.????}`;

module.exports = {
	async headers() {
		return [
			{
				source: '/',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: csp
					}
				]
			},
			{
				source: '/((?!path).*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: csp
					}
				]
			}
		]
	}
}
