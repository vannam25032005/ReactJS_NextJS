import { useState } from "react";

function StatusBadge({ status }) {
  const [trangThai, setTrangThai] = useState(status);

  const mauNen = {
    online: "green",
    offline: "gray",
    busy: "red",
  };

  const doiTrangThai = () => {
    if (trangThai === "online") setTrangThai("busy");
    else if (trangThai === "busy") setTrangThai("offline");
    else setTrangThai("online");
  };

  return (
    <div>
      <div
        style={{
          background: mauNen[trangThai],
          color: "white",
          padding: "10px",
          width: "100px",
          textAlign: "center",
        }}
      >
        {trangThai}
      </div>

      <button onClick={doiTrangThai}>Đổi trạng thái</button>
    </div>
  );
}

export default StatusBadge;
