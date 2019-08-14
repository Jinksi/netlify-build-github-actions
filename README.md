# Trigger Netlify build using Github Actions Schedule Event

1. Add a [Build hook](https://www.netlify.com/docs/webhooks/#incoming-webhooks) to your site using the [Netlify Dashboard](https://app.netlify.com/)

   > Settings > Build & Deploy > Continuous Deployment > Build hooks

1. Create a `.github/workflows/main.yml` file in your Github repo, replacing _YOUR_BUILD_HOOK_ with the build hook you just created.

   ```yaml
   name: Trigger Netlify Build
   on:
     schedule:
       - cron: '*/15 * * * *' # every 15 mins
   jobs:
     build:
       name: Request Netlify Webhook
       runs-on: ubuntu-latest
       steps:
         - name: Curl request
           run: curl -X POST -d {} YOUR_BUILD_HOOK
   ```

1. Adjust the `cron` settings to determine how often the build will be triggered. See the [Github Actions Docs](https://help.github.com/en/articles/events-that-trigger-workflows#scheduled-events) for more info.

1. Open the _Actions_ tab in you Github repo to watch the workflow complete. 🎉
