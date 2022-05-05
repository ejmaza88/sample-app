import redis

r = redis.Redis(
    host='redis',
    password='foobared',
    port='6379'
)

r.set('name', 'esvin')
value = r.get('name')
print(value)

