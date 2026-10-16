# Mesonet Dark for Rainmeter

Five independently movable Windows desktop skins embedding the official Oklahoma Mesonet widgets. Default station: Norman (NRMN). The weather comes directly from Mesonet; this package does not include or simulate weather readings.

## Install

1. Install and run [Rainmeter 4.5 or newer](https://www.rainmeter.net/) on Windows 10/11.
2. Ensure [Microsoft Edge WebView2 Evergreen Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) is installed.
3. Double-click `MesonetDark-1.0.0.rmskin` and choose Install. Leave **WebView2.dll** checked in the installer. The package includes both architectures of the **NSTechBytes WebView2 Rainmeter plugin v1.0.0** from its [official release](https://github.com/NSTechBytes/WebView2/releases/tag/v1.0.0); Rainmeter installs the matching one. The small forecast skin is selected to load.
4. In Manage Rainmeter, expand **MesonetDark**. Load any of the five skins you want; each can be positioned separately. If the browser does not start after installation, restart Rainmeter.

Manual alternative: copy the `MesonetDark` folder from the ZIP into your Rainmeter Skins folder (normally `Documents\Rainmeter\Skins`). Install the NSTechBytes plugin from the official release above, or copy the matching `Plugins\64bit\WebView2.dll` / `Plugins\32bit\WebView2.dll` from the ZIP to `%AppData%\Rainmeter\Plugins`. Match the Rainmeter process architecture, not just Windows. Restart Rainmeter, choose Refresh all, and load a skin. For a custom/OneDrive/portable installation, use the Skins path shown by your Rainmeter installation. Do not substitute the older khanhas `WebView` plugin; the APIs differ.

## Included skins

| Skin | Official widget | Content dimensions at Scale=1 |
| --- | --- | --- |
| LocalWeather | Local weather with temperature graph | 780 × 560 |
| LocalNoGraph | Local weather without temperature graph | 612 × 498 |
| SmallForecast | Small with forecast | 235 × 377 |
| SmallConditions | Small without forecast | 235 × 231 |
| FireWeather | Fire weather | 235 × 521 |

The frame adds 24 pixels of width and 164 pixels of height. Widgets keep Mesonet's published dimensions so their content is not intentionally cropped. For small desktops, start with SmallForecast or SmallConditions. Loading fewer skins also reduces browser memory use.

## Choose your station and size

Right-click the title bar → **Mesonet settings**. Edit `@Resources\Settings.inc`, save, then refresh each loaded skin. The shared file applies to all five skins.

```ini
Station=NRMN
Dark=1
RefreshSeconds=300
Scale=1
```

Use a four-character station ID from [Mesonet's station information](https://www.mesonet.org/about/mesonet-sites). IDs are case-insensitive. Malformed IDs fall back to NRMN; a well-formed but nonexistent ID may produce an error page from Mesonet. The station selected in Mesonet's embedded controls may reset to your configured ID at the next scheduled reload.

Set `Scale=0.85` for a smaller display, or `1.25` for larger content. Suggested range: 0.75–1.5. Windows display scaling may also affect physical size. Set `RefreshSeconds=0` to disable scheduled frame reloads. Positive intervals are limited to 60–3600 seconds. Mesonet can also refresh its own content internally.

## Desktop controls

- Drag the top title bar to move a skin. Hold Ctrl while dragging inside the browser area.
- Right-click the title bar (or Ctrl + right-click the browser area) for Rainmeter's menu.
- **Dark / Original** switches the iframe filter for the current session. To set the startup preference, change `Dark` in Settings.inc.
- **Reload** requests the configured widget again. **Open widget in browser** in the title-bar menu opens the direct source outside Rainmeter.
- Rainmeter's Settings → Position → On desktop can keep a skin behind application windows. Leave click-through disabled if you want widget controls to work.
- External popup links inside the widget are blocked to keep the desktop frame in place; use **Open widget in browser** for those links.

## Dark mode and data freshness

The outer frame is dark. The embedded Mesonet pages are cross-origin, so a CSS `invert(.92) hue-rotate(180deg)` filter on the iframe darkens the entire widget without scraping or modifying Mesonet's page. **This also changes colors in images, temperature graphs, and fire-weather graphics.** Use Original for the source colors. Text, links, and dropdowns remain embedded web content, subject to the source widget's behavior.

The request time in the footer means only that a frame reload was requested. It does not confirm a successful weather update. Read the observation time shown inside the Mesonet widget. Offline or server failures may leave older readings visible; a browser error page can also trigger the iframe load event. The package does not claim data is live based on that event.

## Troubleshooting

- **Browser unavailable / missing Plugin=WebView2:** install the NSTechBytes plugin above, restart Rainmeter, and check About → Log. If installing DLLs manually, their architecture must match Rainmeter (64-bit or 32-bit), not just Windows. The plugin project documents `%AppData%\Rainmeter\Plugins` for manual installation; use its RMSKIN installer when possible.
- **Blank/error widget:** use the source menu item to test the same URL in your browser. Confirm your station ID and Internet access. A filter cannot repair a Mesonet outage or a change in embedding policy. The wrapper shows no synthetic fallback readings.
- **Frame appears but browser does not:** install/update the WebView2 Runtime and restart Rainmeter. Confirm `@Resources\Web` exists next to Settings.inc. The plugin's virtual host serves those local files without a local HTTP server.
- **Content cut off after manual edits:** restore the widget's dimensions in its INI, set Scale=1 and refresh. Mesonet may change its widget layouts in the future.
- **Long-running issues:** refresh the skin. Open Rainmeter's log for plugin errors.

## Validation and limitations

The package is prepared on Linux. Local wrapper behavior, URL generation, dimensions, theme switching, offline messaging, and archive structure can be checked here. Actual Rainmeter loading, the Windows plugin binary, and current Mesonet iframe rendering require verification on Windows. The build environment cannot load Mesonet directly, so no live data screenshot is included.

## Sources and attribution

- Official widget endpoints and dimensions: https://www.mesonet.org/more/widgets
- Station information: https://www.mesonet.org/about/mesonet-sites
- Browser plugin and integration: https://github.com/NSTechBytes/WebView2
- WebView2 Runtime: https://developer.microsoft.com/en-us/microsoft-edge/webview2/

This is an independent skin, not an official Oklahoma Mesonet product. Mesonet content and marks belong to their respective owners; attribution inside the original widgets is retained. No Mesonet data, artwork, or Microsoft runtime is redistributed. The MIT-licensed NSTechBytes WebView2 plugin DLLs are redistributed unchanged with their license in `@Resources\Licenses\WebView2.txt`. The original plugin ZIP SHA-256 is `f1b207eb61cfd3487cab39be3b176310af464104eb9f385357617b4fbf23e80c`.
