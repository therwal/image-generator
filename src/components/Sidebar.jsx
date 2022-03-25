import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <select value="">
        <option value="512">Small 512x512</option>
        <option value="1024">Medium 1024x1024</option>
        <option value="2048">Large 2048x2048</option>
      </select>
      <button>Download</button>
    </div>
  );
}

export default Sidebar;
