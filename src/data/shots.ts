// Project galleries that hang in the right margin next to each project row.
// Keyed by a slugified project name so ProjectCard can look one up without
// wiring it through the Project type. Screenshots live in public/projects.

export interface Shot {
  src: string;
  thumb: string;
  width: number;
  height: number;
  /** What is in the frame, where it is known. */
  caption?: string;
  /** A clip rather than a still. Plays in the viewer, still opens on its own. */
  video?: boolean;
}

type Frame = [width: number, height: number, caption?: string, ext?: string];

function gallery(slug: string, frames: Frame[]): Shot[] {
  return frames.map(([width, height, caption, ext = 'jpg'], index) => {
    const video = ext === 'mp4';
    const file = `${slug}-${index + 1}.${ext}`;
    return {
      src: `/projects/${file}`,
      thumb: video ? `/projects/${slug}-${index + 1}.jpg` : `/projects/${file}`,
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
    [1912, 866, 'CLI sync — pulling secrets straight into a project', 'png'],
    [1902, 863, 'Projects overview — per-org environments and members', 'png'],
    [1915, 863, 'Project members — roles and access', 'png'],
    [1901, 874, 'Audit log — every access request and change tracked', 'png'],
    [1906, 866, 'CLI & service token setup', 'png'],
  ]),
  gitscope: gallery('gitscope', [
    [1280, 800, 'GitScope — repository analytics dashboard'],
    [1900, 869, 'Marketing site — cross-repo benchmarking', 'png'],
    [1914, 868, 'Engineering Hub — analytics console overview', 'png'],
    [1900, 866, 'Intelligence Hub — recursive repo analysis', 'png'],
    [1912, 866, 'Stack Trending — most-starred repos on GitHub', 'png'],
    [1909, 864, 'Account settings and profile', 'png'],
  ]),
  'video-codex': gallery('video-codex', [[1280, 800, 'Video Codex — transcoding workspace']]),
  timergame: gallery('timergame', [[1280, 800, 'TimerGame — reaction timer challenge']]),
  nutribite: gallery('nutribite', [
    [1280, 800, 'NutriBite — meal subscription landing page'],
    [1892, 866, 'How it works — personalized meal preferences', 'png'],
  ]),
};

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const shotsFor = (projectName: string): Shot[] => SHOTS[slugify(projectName)] ?? [];
