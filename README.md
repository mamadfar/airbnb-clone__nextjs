## Getting Started
First, install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

Second, run development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Environment Variable
1. For using Map you have to create your own account on [Map Box](https://mapbox.com) (free)
2. Create `.env.local` then add your `map style` and `map token` variables like the below: 
```yaml
AIR_MAP_STYLE="Your map style address"
AIR_MAP_TOKEN="Your map token"
```
3. Restart the app
