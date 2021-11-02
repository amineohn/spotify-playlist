import useSWR from "swr";

import fetcher from "../libs/fetcher";
import { TopTracks } from "../libs/types";
import Track from "../components/Track";

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
