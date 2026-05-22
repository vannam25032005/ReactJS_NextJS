import './App.css'

const menuItems = [
  { label: 'Dashboard', icon: '/Squares four 1.png', active: true },
  { label: 'Projects', icon: '/Folder.png' },
  { label: 'Teams', icon: '/Groups.png' },
  { label: 'Analytics', icon: '/Pie chart.png' },
  { label: 'Messages', icon: '/Chat.png' },
  { label: 'Integrations', icon: '/Code.png' },
]

const stats = [
  {
    title: 'Turnover',
    value: '$92,405',
    change: '5.39%',
    icon: '/Button 1509.png',
    tone: 'pink',
  },
  {
    title: 'Profit',
    value: '$32,218',
    change: '5.39%',
    icon: '/Button 1529.png',
    tone: 'blue',
  },
  {
    title: 'New customer',
    value: '298',
    change: '6.84%',
    icon: '/Button 1530.png',
    tone: 'cyan',
  },
]

const reports = [
  {
    name: 'Elizabeth Lee',
    avatar: '/Avatar (1).png',
    company: 'AvatarSystems',
    value: '$359',
    date: '10/07/2023',
    status: 'New',
  },
  {
    name: 'Carlos Garcia',
    avatar: '/Avatar (2).png',
    company: 'SmoozeShift',
    value: '$747',
    date: '24/07/2023',
    status: 'New',
  },
  {
    name: 'Elizabeth Bailey',
    avatar: '/Avatar (3).png',
    company: 'Prime Time Telecom',
    value: '$564',
    date: '08/08/2023',
    status: 'In-progress',
  },
  {
    name: 'Ryan Brown',
    avatar: '/Avatar (4).png',
    company: 'OmniTech Corporation',
    value: '$541',
    date: '31/08/2023',
    status: 'In-progress',
  },
  {
    name: 'Ryan Young',
    avatar: '/Avatar (5).png',
    company: 'DataStream Inc.',
    value: '$769',
    date: '01/05/2023',
    status: 'Completed',
  },
  {
    name: 'Hailey Adams',
    avatar: '/Avatar (6).png',
    company: 'FlowRush',
    value: '$922',
    date: '10/06/2023',
    status: 'Completed',
  },
]

function App() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>Logo</span>
        </div>

        <nav className="side-nav" aria-label="Main navigation">
          {menuItems.map((item) => (
            <a className={item.active ? 'active' : ''} href="#" key={item.label}>
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <section className="upgrade-card">
          <img src="/Group.png" alt="" />
          <h2>V2.0 is available</h2>
          <button type="button">Try now</button>
        </section>
      </aside>

      <main className="content">
        <header className="topbar">
          <h1>Dashboard</h1>
          <div className="top-actions">
            <label className="search-box">
              <img src="/Search.png" alt="" />
              <input type="search" placeholder="Search..." />
            </label>
            <button className="icon-button" type="button" aria-label="Notifications">
              <img src="/Bell 1.png" alt="" />
            </button>
            <button className="icon-button" type="button" aria-label="Help">
              <img src="/Question 1.png" alt="" />
            </button>
            <img className="profile-avatar" src="/Avatar 313.png" alt="Profile" />
          </div>
        </header>

        <section className="main-panel">
          <div className="section-heading">
            <img src="/Squares four 1.png" alt="" />
            <h2>Overview</h2>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <article className={`stat-card ${stat.tone}`} key={stat.title}>
                <div>
                  <h3>{stat.title}</h3>
                  <strong>{stat.value}</strong>
                  <p>
                    <span>▲ {stat.change}</span> period of change
                  </p>
                </div>
                <img src={stat.icon} alt="" />
              </article>
            ))}
          </div>

          <div className="report-heading">
            <div className="section-heading">
              <img src="/File text 1.png" alt="" />
              <h2>Detailed report</h2>
            </div>
            <div className="report-actions">
              <button type="button">
                <img src="/Download.png" alt="" />
                Import
              </button>
              <button type="button">
                <img src="/Move up.png" alt="" />
                Export
              </button>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" aria-label="Select all rows" />
                  </th>
                  <th>CUSTOMER NAME</th>
                  <th>COMPANY</th>
                  <th>ORDER VALUE</th>
                  <th>ORDER DATE</th>
                  <th>STATUS</th>
                  <th aria-label="Actions"></th>
                </tr>
              </thead>
              <tbody>
                {reports.map((row) => (
                  <tr key={`${row.name}-${row.company}`}>
                    <td>
                      <input type="checkbox" aria-label={`Select ${row.name}`} />
                    </td>
                    <td>
                      <div className="customer-cell">
                        <img src={row.avatar} alt="" />
                        <span>{row.name}</span>
                      </div>
                    </td>
                    <td>{row.company}</td>
                    <td>{row.value}</td>
                    <td className="muted">{row.date}</td>
                    <td>
                      <span className={`status ${row.status.toLowerCase()}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <button className="edit-button" type="button" aria-label={`Edit ${row.name}`}>
                        <img src="/create.png" alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="table-footer">
            <span>63 results</span>
            <nav className="pagination" aria-label="Pagination">
              <button type="button" aria-label="Previous page">‹</button>
              <button className="current" type="button">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">4</button>
              <span>...</span>
              <button type="button">10</button>
              <button type="button">11</button>
              <button type="button" aria-label="Next page">›</button>
            </nav>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
