
function AvatarName({email}) {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const firstLetter = email.charAt(0).toUpperCase();
    const randomColor = getRandomColor();

    return (
        <div className={"w-15 h-15 rounded-full"}
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: randomColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
            }}
        >
            {firstLetter}
        </div>
    );
}

export default AvatarName;