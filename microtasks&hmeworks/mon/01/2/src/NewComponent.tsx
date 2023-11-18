type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]
    return (
        // <ul>
        //     {props.students.map((student:StudentType) => {
        //         return (
        //             <li key={student.id}>
        //                 <span>{student.name}</span>
        //                 <span>age: {student.age}</span>
        //             </li>
        //         )
        //     })}
        // </ul>
        <table>
            <tr>
                <th>ID</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {topCars.map((car, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}