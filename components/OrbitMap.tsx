"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { clusters, labs } from "@/data/labs";
const POSITIONS: Record<string, [number, number]> = {
  "AI.DT": [34, 0],
  ROBOT: [70, 0],
  "XR.HCI": [90, 30],
  URBAN: [90, 70],
  OCEAN: [70, 100],
  AIoT: [34, 100],
  CYBER: [10, 70],
  MARKET: [10, 30],
};
export function OrbitMap() {
  const [activeName, setActiveName] = useState(clusters[0].name);
  const activeCluster =
    clusters.find((c) => c.name === activeName) ?? clusters[0];
  const relatedLabs = useMemo(
    () => labs.filter((l) => l.cluster === activeCluster.name),
    [activeCluster.name],
  );
  return (
    <section className="container section" id="orbit-section">
      <div className="section-head">
        <span className="kicker">Technology orbit map</span>
        <h2>Clusters là các orbit năng lực.</h2>
        <p>
          Hover vào từng orbit để xem cụm công nghệ và các lab liên quan. Từ
          cluster, người dùng có thể đi xuống từng lab cụ thể.
        </p>
      </div>
      <div className="orbit-cluster-wrap">
        <div className="panel cluster-orbit-panel">
          <div className="orbit-map">
            <div className="orbit-ring r1" />
            <div className="orbit-ring r2" />
            <div className="orbit-ring r3" />
            {clusters.map((c) => {
              let xy = POSITIONS[c.code];

              return (
                <span
                  key={`line-${c.code}`}
                  className={`orbit-line ${c.name === activeName ? "active" : ""}`}
                  style={{ transform: `rotate(${c.angle}deg)` }}
                />
              );
            })}
            <div className="orbit-core">
              TECH
              <br />
              CONVERGENCE
              <br />
              HUB
            </div>
            {clusters.map((c) => {
              const [x, y] = POSITIONS[c.code] ?? [50, 50];
              const count = labs.filter((l) => l.cluster === c.name).length;
              return (
                <button
                  key={c.code}
                  className={`orbit-cluster-node ${c.name === activeName ? "active" : ""}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%,-50%)",
                  }}
                  onMouseEnter={() => setActiveName(c.name)}
                  onFocus={() => setActiveName(c.name)}
                >
                  <b>{c.code}</b>
                  <span>
                    {c.name.split(" & ")[0]}
                    <br />
                    {count} labs
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <aside className="panel orbit-detail">
          <div className="big-code">{activeCluster.code}</div>
          <span className="kicker">{activeCluster.name}</span>
          <h3>{activeCluster.name}</h3>
          <p>{activeCluster.desc}</p>
          <div className="chip-row">
            {activeCluster.tags.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
          <span className="linked-count">
            {relatedLabs.length} linked lab nodes
          </span>
          <div className="mini-labs">
            {relatedLabs.slice(0, 5).map((l) => (
              <Link className="mini-lab" href={`/labs/${l.id}`} key={l.id}>
                <div>
                  <b>{l.code}</b>
                  <br />
                  <span>{l.name}</span>
                </div>
                <span>{l.room}</span>
              </Link>
            ))}
          </div>
          <Link className="btn btn-primary" href="#lab-directory">
            View lab directory →
          </Link>
        </aside>
      </div>
    </section>
  );
}
