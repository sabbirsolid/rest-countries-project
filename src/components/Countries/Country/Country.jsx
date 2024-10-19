import './Country.css'
export default function Country({country}) {
    const {name} = country;
    // const {official,common} = eng
    return (
        <div className='country'>
            <h3>Common Name: {name?.common}</h3>
            <h3>Official Name: {name?.official}</h3>
            <img src={country.flags.png} alt="" />
        </div>
    );
};
