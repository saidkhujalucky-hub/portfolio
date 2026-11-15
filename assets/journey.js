// Each stop looks across the water from a different point on the same open shoreline.
// Forward travel is monotonic, including the first and last camera positions.
const stopSpacing = 19;
const waveLength = 1.38;
const waveWidth = 9;

export function shoreline(stop) {
  return [waveWidth * Math.sin(stop * waveLength), -stopSpacing * stop];
}

export function exhibitPose(stop) {
  const [x, z] = shoreline(stop);
  const angle = -1.12 + 0.12 * Math.cos(stop * waveLength);
  const distance = 14.8;
  return {
    position: [x - distance * Math.sin(angle), 0, z - distance * Math.cos(angle)],
    rotation: angle,
  };
}

export function cameraPose(stop, mobile = false) {
  const [x, z] = shoreline(stop);
  const exhibit = exhibitPose(stop);
  const setback = mobile ? 5.4 : 0;
  return {
    position: [x + setback * Math.sin(exhibit.rotation), mobile ? 3.2 : 2.8, z + setback * Math.cos(exhibit.rotation)],
    target: [exhibit.position[0], mobile ? 2 : 2.05, exhibit.position[2]],
  };
}

export function chapterRail(chapters, names) {
  const position = stop => {
    const [x] = shoreline(stop);
    return [17 + x * 0.85, 8 + 26 * stop];
  };
  const samples = Array.from({length: 91}, (_, index) => {
    const [x, y] = position((chapters.length - 1) * index / 90);
    return (index ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2);
  }).join(' ');
  const track = '<svg class="route-track" viewBox="0 0 54 172" aria-hidden="true"><path d="' + samples + '"/></svg>';
  return track + chapters.map((id, index) => {
    const [x, y] = position(index);
    return '<a title="' + names[index] + '" aria-label="' + names[index] + '" href="#' + id +
      '" style="--x:' + x + ';--y:' + y + '"><span>' + String(index + 1).padStart(2, '0') + '</span></a>';
  }).join('');
}
