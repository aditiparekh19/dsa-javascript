function minMeetingRooms(intervals) {
    if (!intervals || intervals.length === 0) return 0;

    let starts = [];
    let ends = [];

    for (let interval of intervals) {
        starts.push(interval[0]);
        ends.push(interval[1]);
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    console.log(starts, ends);

    let rooms = 0;
    let endPointer = 0;

    for (let i = 0; i < starts.length; i++) {
        if (starts[i] < ends[endPointer]) {
            rooms++;  // need new room
        } else {
            endPointer++; // reuse room
        }
    }

    return rooms;
}


console.log(minMeetingRooms([[0,30],[5,10],[15,20]]));
//0---5---10---15---20---30
//Time complexity - O(n log n)
//Space complexity - O(n)
