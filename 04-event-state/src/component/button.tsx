export default function Tombol_1() {
    function handleClick() {
        alert('Tombol telah ditekan!');
    }

    function handleMouseOver() {
        console.log('Eits, mau mencet tombol ya?');
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            onMouseOver={handleMouseOver}>
            Ini Tombol
        </button>
    );
}

export function Tombol_2({isiPesan, namaTombol}: {isiPesan: string, namaTombol: string}) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(isiPesan)}
        >
            {namaTombol}
        </button>
    )
}

export function Tombol_3({isiPesan, namaTombol}: {isiPesan: string, namaTombol: string}) {
    return (
        <button
            className="bg-green-400 hover:bg-green-700 text-white p-2 rounded m-2"
            onClick={
                (e) => {
                    e.stopPropagation();
                    alert(isiPesan)
                }
            }>
            {namaTombol}
        </button>
    )
}