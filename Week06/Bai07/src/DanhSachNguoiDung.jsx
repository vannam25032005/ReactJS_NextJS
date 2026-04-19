function DanhSachNguoiDung({ duLieu }) {
  return (
    <ul>
      {duLieu.map((nguoiDung) => (
        <li key={nguoiDung.id}>
          <p>Ten: {nguoiDung.name}</p>
          <p>Email: {nguoiDung.email}</p>
          <p>So dien thoai: {nguoiDung.phone}</p>
        </li>
      ))}
    </ul>
  );
}

export default DanhSachNguoiDung;
