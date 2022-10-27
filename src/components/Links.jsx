const Links = () => {
  const btnLinks = [
    {id: "btn__zuri", label: "Zuri Team", links: "https://training.zuri.team/"},
    {id: "books", label: "Zuri Books", links: "http://books.zuri.team"},
    {id: "book__python", label: "Python Books", links: "https://books.zuri.team/python-for-beginners?ref_id=PhilipOyelegbin"},
    {id: "pitch", label: "Background Check for Coders", links: "https://background.zuri.team"},
    {id: "book__design", label: "Design Books", links: "https://books.zuri.team/design-rules"}
  ]
  return (
    <section className="link-section">
      {btnLinks && btnLinks?.map(obj => {
        return (
          <a href={obj.links} id={obj.id} className="btn" target="_blank" rel="noopener noreferrer" key={obj.id}>{obj.label}</a>
        )}
      )}
    </section>
  )
}

export default Links