import json

# Read the JSON data from the file
with open('C:\\python trainig\\Assessment2\\ex5.json', 'r') as file:
    ex5 = json.load(file)

# Add a new batter named "Tea" for the donut with name "Old Fashioned"
new_batter = {"id": "1003", "type": "Tea"}
donut_name = "Old Fashioned"
batter_list = None
for item in ex5:
    if item["name"] == donut_name:
        batter_list = item["batters"]["batter"]
        break

if batter_list:
    id_exists = any(batter["id"] == new_batter["id"] for batter in batter_list)
    if id_exists:
        print(f"Error: Batter with ID {new_batter['id']} already exists for {donut_name}.")
    else:
        batter_list.append(new_batter)
        print("Successfully Inserted")
else:
    print(f"Error: Donut with name {donut_name} not found.")


with open('C:\\python trainig\\Assessment2\\ex5.json', 'w') as file:
    json.dump(ex5, file, indent=3)
    
