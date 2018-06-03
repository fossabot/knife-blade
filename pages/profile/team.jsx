export default props => (
  <div>
    <h1>Team Profile</h1>
    <h2>
      <em>Team ID:</em> <code>{props.url.query.id}</code>
    </h2>
  </div>
)
