export default (fish) => {
  var dataSet = [
    {
      setName: 'Information',
      dataToShow: [
        {
          data: 'Scientific Name',
          subdata: fish.sname,
        },
        {
          data: 'Minimum Shore Size',
          subdata: fish.shore,
        },
        {
          data: 'Minimum Boat Size',
          subdata: fish.boat,
        },
        {
          data: 'Record Shore Size',
          subdata: fish.recshore,
        },
        {
          data: 'Minimum Shore Size',
          subdata: fish.shore,
        },
        {
          data: 'Can I eat it?',
          subdata: 'Try',
        }

      ]
    },
    {
      setName: 'Species Order',
      dataToShow: [
        {
          data: fish.specorder,
          subdata: false
        }
      ]
    },
    {
      setName: 'Species Description',
      dataToShow: [
        {
          data: null,
          subdata: fish.desc
        }
      ]
    },
    {
      setName: 'Suggested Bait and Rigs',
      dataToShow: [
        {
          data: 'Shore Bait',
          subdata: false,
          popup: true
        },
        {
          data: 'Shore Rig',
          subdata: false,
          popup: true
        },
        {
          data: 'Boat/Kayak Bait',
          subdata: false,
          popup: true
        },
        {
          data: 'Boat/Kayak Rig',
          subdata: false,
          popup: true
        }
      ]
    }
  ]
  return dataSet
}
