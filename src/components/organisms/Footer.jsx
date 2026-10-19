export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ textAlign: 'center', padding: '20px', marginTop: '50px' }}>
            <p> {currentYear} Ignacio Muñoz Oyarzo.</p>
            <p>Contacto: igna.munozo@duocuc.cl</p>
        </footer>
    );
};