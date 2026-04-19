function ThongBao({ noiDung }) {
  if (!noiDung) return null;

  return <div className="thongBao">{noiDung}</div>;
}

export default ThongBao;
