function MapFunctions() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return (
        <>
            <h3>MapFunctions</h3>
            squares = {numberArray1} <br />
            cubes = {stringArray1} <br />
        </>
    )
}
export default MapFunctions
