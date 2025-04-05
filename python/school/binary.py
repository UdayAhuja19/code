import pickle
f = open("customer.dat", "wb")
d = {"c1": ['Simran Raheja', 'Haryana'],
    "c2": ['Praharsh Kumar', 'Pune'],
    "c3": ["Vinita Minj", 'Indore']}
pickle.dump(d, f)
f.close()

f = open('customer.dat', 'rb')
p = pickle.load(f)
print(p)
f.close()