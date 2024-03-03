file_path = "C:\\Users\\dagha\\Downloads\\finalreport_data\\form_data.txt"

with open(file_path, "r") as file:
    time = file.readline().strip().split(": ")[1]
    activity = file.readline().strip().split(": ")[1]
    cost = file.readline().strip().split(": ")[1]
    distance = file.readline().strip().split(": ")[1]

list = []
if(time == "Thirty minutes"):
    list.append("Playing a video game($0)(0mi)")
    list.append("Watching TV($0)(0mi)")
    list.append("Reading comics($0)(0mi)")
    list.append("Listening to ($0)(0mi)")

if(time == "One hour"):
    list.append("Watching a movie($0)(0mi)")
    list.append("Listening to the radio($0)(0mi)")
    list.append("Going on a hike($0)(25+mi)")

if(time == "Two hours"):
    list.append("Playing a board game($0)(0mi)")
    list.append("Going to the theater($20)(5mi)")
    list.append("Going to the art museum($50)(10mi)")

if(time == "Three hours or more"):
    list.append("Reading a book($0)(0mi)")
    list.append("Playing an entire video game($50)(0mi)")
    list.append("Playing a sport($0)(5mi)")
    list.append("Going to a theme park($100)(25+mi)")


if(activity == "Watch something"):
    for i in list:
        if "Watching" not in i:
            list.remove(i)


if(activity == "Listen to something"):
    for i in list:
        if "Listening" not in i:
            list.remove(i)


if(activity == "Play something"):
    for i in list:
        if "Playing" not in i:
            list.remove(i)



if(activity == "Read something"):
    for i in list:
        if "Reading" not in i:
            list.remove(i)


if activity == "Go somewhere":
    list = [i for i in list if "Going" in i]
ئس


if(cost == "$0"):
    for i in list:
        if "($0)" not in i:
            list.remove(i)

if(cost == "$20"):
    for i in list:
        if "($20)" not in i:
            list.remove(i)

if(cost == "$50"):
    for i in list:
        if "($50)" not in i:
            list.remove(i)

if(cost == "$100"):
    for i in list:
        if "($100)" not in i:
            list.remove(i)

if(distance == "0mi"):
    for i in list:
        if "(0mi)" not in i:
            list.remove(i)

if(distance == "5mi"):
    for i in list:
        if "(5mi)" not in i:
            list.remove(i)

if(distance == "10mi"):
    for i in list:
        if "(10mi)" not in i:
            list.remove(i)

if(distance == "25+mi"):
    for i in list:
        if "(25+mi)" not in i:
            list.remove(i)

with open('output.txt', 'w') as f:
    if not list:
        f.write("No activities found\n")
    else:
        f.write(', '.join(list) + "\n")
