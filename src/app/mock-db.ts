import { IDB}  from "./common/entities";

export const DATABASE: IDB = {
  students: [
    {
      id: 1,
      name: "Max",
      lastName: "Pain",
      address: "st. Mir 25",
      description: "Feel the pain"
    }, {
      id: 2,
      name: "Luck",
      lastName: "Osm",
      address: "st. Stir 48",
      description: "Have a power"
    }, {
      id: 3,
      name: "Julia",
      lastName: "Fix",
      address: "st. Doom 13",
      description: "Know some magic"
    }
  ],
  subjects: [
    {
      id: 1,
      name: "Biology",
      teacher: "Ms. Poison",
      cabinet: 10,
      description: "Know evolution theory",
      date: [ "06/01" ],
      students: [
        {
          name: "Max",
          lastName: "Pain",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }, {
          name: "Luck",
          lastName: "Osm",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }, {
          name: "Julia",
          lastName: "Fix",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Maths",
      teacher: "Mr. Plus",
      cabinet: 14,
      description: "",
      date: [ "06/01" ],
      students: [
        {
          name: "Max",
          lastName: "Pain",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }, {
          name: "Luck",
          lastName: "Osm",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }, {
          name: "Julia",
          lastName: "Fix",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "History",
      teacher: "Mr. Napoleon",
      cabinet: 10,
      description: "Hate russian winter",
      date: [ "06/01" ],
      students: [
        {
          name: "Max",
          lastName: "Pain",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }, {
          name: "Luck",
          lastName: "Osm",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }, {
          name: "Julia",
          lastName: "Fix",
          averageMark: 0,
          marks: [
            {
              day: "06/01",
              mark: ""
            }
          ]
        }
      ]
    },
  ]
};
