import psycopg2

# Connect to your postgres DB
conn = psycopg2.connect("dbname=sample_app user=root password=siridog host=db")

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a query
cur.execute("SELECT * FROM actor")

# Retrieve query results
records = cur.fetchall()

for r in records:
    print(r)
