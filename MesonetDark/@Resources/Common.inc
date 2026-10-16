; Included after each skin's [Variables] section.
[MeterBackground]
Meter=Shape
Shape=Rectangle 0,0,((#WidgetW#+24)*#Scale#),((#WidgetH#+164)*#Scale#),10 | Fill Color 17,23,32,255 | StrokeWidth 1 | Stroke Color 48,62,77,255

[MeterAccent]
Meter=Shape
Shape=Rectangle (14*#Scale#),(16*#Scale#),(3*#Scale#),(24*#Scale#) | Fill Color 88,217,190,255 | StrokeWidth 0

[MeterTitle]
Meter=String
X=(25*#Scale#)
Y=(10*#Scale#)
W=((#WidgetW#-16)*#Scale#)
H=(18*#Scale#)
FontFace=Segoe UI
FontSize=(10*#Scale#)
FontColor=233,240,247
StringStyle=Bold
AntiAlias=1
ClipString=1
Text=OKLAHOMA MESONET
ToolTipText=Drag this title bar to move. Right-click for settings.

[MeterSubtitle]
Meter=String
X=(25*#Scale#)
Y=(30*#Scale#)
FontFace=Segoe UI
FontSize=(9*#Scale#)
FontColor=149,166,184
AntiAlias=1
Text=#WidgetTitle#

; Visible behind the browser if the plugin or runtime cannot start.
[MeterBrowserHelp]
Meter=String
X=(20*#Scale#)
Y=(74*#Scale#)
W=((#WidgetW#-16)*#Scale#)
H=(170*#Scale#)
FontFace=Segoe UI
FontSize=(10*#Scale#)
FontColor=203,216,229
AntiAlias=1
ClipString=2
Text=Browser unavailable?#CRLF##CRLF#Install the NSTechBytes WebView2 Rainmeter plugin and Microsoft WebView2 Runtime, then restart Rainmeter.#CRLF##CRLF#Click here for the plugin.
LeftMouseUpAction=["https://github.com/NSTechBytes/WebView2/releases/tag/v1.0.0"]

[MeasureBrowser]
Measure=Plugin
Plugin=WebView2
HostPath=#@#Web
HostOrigin=1
HostSecurity=1
URL=index.html?widget=#WidgetType#&station=#Station#&dark=#Dark#&refresh=#RefreshSeconds#
X=(12*#Scale#)
Y=(56*#Scale#)
W=(#WidgetW#*#Scale#)
H=((#WidgetH#+96)*#Scale#)
ZoomFactor=#Scale#
AutoStart=1
Hidden=0
Clickthrough=2
ZoomControl=0
NewWindow=0
Notifications=0
OnWebViewFailAction=[!Log "Mesonet Dark: WebView2 failed. Check the plugin, runtime, and Rainmeter log." "Error"]
