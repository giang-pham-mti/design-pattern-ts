// Subject Interface
interface VideoDownloader {
  downloadVideo(url: string): string;
}

// RealSubject: Expensive object that fetches video
class RealVideoDownloader implements VideoDownloader {
  public downloadVideo(url: string): string {
    console.log(`Downloading video from ${url}...`);
    // Simulate heavy resource usage
    return `Video content from ${url}`;
  }
}

// Proxy: Manages access to RealVideoDownloader with lazy loading
class ProxyVideoDownloader implements VideoDownloader {
  private realDownloader: RealVideoDownloader | null = null;
  private videoCache: { [key: string]: string } = {};

  public downloadVideo(url: string): string {
    // Caching logic
    if (this.videoCache[url]) {
      console.log(`Returning cached video for ${url}`);
      return this.videoCache[url];
    }

    // Lazy initialization of the RealSubject
    if (!this.realDownloader) {
      this.realDownloader = new RealVideoDownloader();
    }

    // Forward request to the RealSubject
    const videoContent = this.realDownloader.downloadVideo(url);
    this.videoCache[url] = videoContent; // Cache the result
    return videoContent;
  }
}

// Client code
const downloader: VideoDownloader = new ProxyVideoDownloader();

console.log(downloader.downloadVideo("https://example.com/video1")); // First time, downloads the video
console.log(downloader.downloadVideo("https://example.com/video1")); // Second time, returns cached video
console.log(downloader.downloadVideo("https://example.com/video2")); // Downloads another video
