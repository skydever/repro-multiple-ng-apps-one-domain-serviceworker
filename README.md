# Multiple Apps with ServiceWorker on one domain

Reproduction for Angular issue "bug(ServiceWorker): multiple apps with ServiceWorker on one domain".

The installation of a 2nd App/ServiceWorker (with different _baseHref_) purges the `Cache Storage` entries
for a previously installed App/ServiceWorker, if they are on the same domain.
This breaks the 1st installed App/ServiceWorker. It is not reachable anymore - you will always be redirected to the latest installed App.

## Setup

### Quick Version (prebuild `dist-sw` folder)

1. Clone this repo
2. `cd sw-app-one`
3. `npm install`
4. start the server: `npm run start-sw`

### Clean build

1. Clone this repo
2. for `sw-app-one` and `sw-app-two` do the following:

* `cd sw-app-...`
* `npm install`
* `npm run build-sw`
* copy the content of the `dist` folder to the `dist-sw` folder of `sw-app-one` (a `http-server` is configured for this location)
  * for `sw-app-one` to `sw-app-one\dist-sw\sw-app-one\` (delete old content, copy new content)
  * for `sw-app-two` to `sw-app-one\dist-sw\sw-app-two\` (delete old content, copy new content)

3. start the server (at `sw-app-one`): `npm run start-sw`

## Additional things to consider

* I had to include the baseHref in the `ServiceWorkerModule.register` method (see [#8516](https://github.com/angular/angular-cli/issues/8516)):

```javascript
ServiceWorkerModule.register("/sw-app-one/ngsw-worker.js", {
  enabled: environment.production
});
```

* I have renamed the `assetGroups` in `ngsw-config.json` for both apps (for a better distinction of the `Cache Storage` entries):

  * `app` -> `sw-app-one-app`, `sw-app-two-app`
  * `assets` -> `sw-app-one-assets`, `sw-app-two-assets`

* At least one route is required to reproduce the issue

* After opening an app, give the browser some time to install the ServiceWorker

## Reproduction

### 1. open [sw-app-one](http://localhost:8090/sw-app-one/)

This will install the ServiceWorker for `sw-app-one`, everything looks fine.
Check the `Cache Storage` entries in the dev tools.

### 2. open [sw-app-two](http://localhost:8090/sw-app-two/)

This will install the ServiceWorker for `sw-app-two`.
Check the `Cache Storage` entries in the dev tools again.
All the entries for `sw-app-one` are gone after some time.
The `ngsw:db:control` (manifests) entry only contains the _assetGroups_ of `sw-app-two`.

### 3. open [sw-app-one](http://localhost:8090/sw-app-one/) again

You will be redirected to [sw-app-two](http://localhost:8090/sw-app-two/).
