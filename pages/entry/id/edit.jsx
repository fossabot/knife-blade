export default props => (
  <div>
    <h1>Edit Entry</h1>
    <h2>
      <em>Entity Type:</em> <code>{props.url.query.entity}</code>
    </h2>
    <h2>
      <em>Entity ID:</em> <code>{props.url.query.id}</code>
    </h2>
    <h2>
      <em>Entry:</em> <code>{props.url.query.entry}</code>
    </h2>
  </div>
)
