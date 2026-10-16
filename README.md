# Mesonet Dark for Rainmeter

Five official Oklahoma Mesonet widgets for your Windows desktop, with dark styling and independently movable Rainmeter frames.

## Download

- **[Download the Rainmeter installer (.rmskin)](https://github.com/Josh-at-Verge/OK-Mesonet-Rainmeter/releases/download/v1.0.0/MesonetDark-1.0.0.rmskin)**
- [Download the manual-install ZIP](https://github.com/Josh-at-Verge/OK-Mesonet-Rainmeter/releases/download/v1.0.0/MesonetDark-1.0.0.zip)
- [Checksums](downloads/SHA256SUMS.txt)
- [GitHub Releases](https://github.com/Josh-at-Verge/OK-Mesonet-Rainmeter/releases)

The installer includes the unchanged NSTechBytes WebView2 plugin for 32-bit and 64-bit Rainmeter. Install Rainmeter 4.5+ and Microsoft's WebView2 Runtime first, then double-click the `.rmskin` file. Load individual skins under **MesonetDark** in Manage Rainmeter.

Defaults to Norman (`NRMN`). Right-click a skin's title bar → **Mesonet settings**, change `Station` in `Settings.inc`, save, then refresh the skin. You can also adjust scaling and the reload interval.

**Dark mode uses a filter that changes chart and image colors. Select Original to restore Mesonet's colors.** Always read the observation time inside the widget.

## Validation status

Local Chromium wrapper and package checks passed. **Actual Windows/Rainmeter loading and live Mesonet iframe rendering have not been verified.** See [validation details](downloads/Validation.txt).

## Source and setup

The complete skin source is in [MesonetDark](MesonetDark). Read the [installation and customization guide](MesonetDark/README.md) for the five widget sizes, controls, dependencies, attribution, and troubleshooting.

## License

Custom skin code: [MIT](LICENSE). The bundled NSTechBytes WebView2 plugin retains its [upstream MIT license](MesonetDark/@Resources/Licenses/WebView2.txt). Remote weather content belongs to Oklahoma Mesonet and its respective owners. This project is independent of Oklahoma Mesonet.
