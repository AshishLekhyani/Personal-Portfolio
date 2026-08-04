export interface Shot {
  src: string;
  thumb: string;
  width: number;
  height: number;
  caption?: string;
  video?: boolean;
}

type Frame = [width: number, height: number, caption?: string, kind?: 'video'];

function gallery(slug: string, frames: Frame[]): Shot[] {
  return frames.map(([width, height, caption, kind], index) => {
    const video = kind === 'video';
    return {
      src: video ? `/projects/${slug}-${index + 1}.mp4` : `/projects/${slug}-${index + 1}.webp`,
      thumb: `/projects/${slug}-${index + 1}-thumb.webp`,
      width,
      height,
      caption,
      video,
    };
  });
}

export const SHOTS: Record<string, Shot[]> = {
  envsync: gallery('envsync', [
    [1280, 800, 'EnvSync — secrets vault dashboard'],
    [1912, 866, 'CLI sync — pulling secrets straight into a project'],
    [1902, 863, 'Projects overview — per-org environments and members'],
    [1915, 863, 'Project members — roles and access'],
    [1901, 874, 'Audit log — every access request and change tracked'],
    [1906, 866, 'CLI & service token setup'],
  ]),
  gitscope: gallery('gitscope', [
    [1280, 800, 'GitScope — repository analytics dashboard'],
    [1900, 869, 'Marketing site — cross-repo benchmarking'],
    [1914, 868, 'Engineering Hub — analytics console overview'],
    [1900, 866, 'Intelligence Hub — recursive repo analysis'],
    [1912, 866, 'Stack Trending — most-starred repos on GitHub'],
    [1909, 864, 'Account settings and profile'],
  ]),
  'video-codex': gallery('video-codex', [[1280, 800, 'Video Codex — transcoding workspace']]),
  timergame: gallery('timergame', [[1280, 800, 'TimerGame — reaction timer challenge']]),
  nutribite: gallery('nutribite', [
    [1280, 800, 'NutriBite — meal subscription landing page'],
    [1892, 866, 'How it works — personalized meal preferences'],
  ]),
};

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const shotsFor = (projectName: string): Shot[] => SHOTS[slugify(projectName)] ?? [];
