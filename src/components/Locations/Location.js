

export const Location = ({ id, address, footage }) => {
    return <section className="location" >
        <div>Address: {address}</div>
        <div>Square Footage: {footage}</div>
    </section>
}