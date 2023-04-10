const Tabs = ({ tabOptions, activeTabId }) => {
  return (
    <div className="d-flex tabs-container fs-5 text-gray">
      {tabOptions.map((item) => (
        <div key={item.id} className={`tab-item ${activeTabId === item.id ? "active" : ""} p-2 me-5 show-cursor-pointer`}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default Tabs;
