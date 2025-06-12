def fahrenheit_to_celsius(fahrenheit):
    return (5/9) * (fahrenheit - 32)

def celsius_to_fahrenheit(celsius):
    return ((celsius * (9/5)) + 32)

while True:
    print("===================Menu=====================")
    print("1. Fahrenheite To Celsius")
    print("2. Celsius To Fahrenheite")
    print("3. Exit")
    print("=============================================")

    choice = int(input("Enter your choice:"))
    if choice == 1:
        fahrenheite = float(input("Enter temperature in fahrenheite:"))
        celsius = fahrenheit_to_celsius(fahrenheite)
        print(f"{fahrenheite} is equal to {celsius}")
    elif choice == 2:
        celsius = float(input("Enter temperature in celsius:"))
        fahrenheite = celsius_to_fahrenheit(celsius)
        print(f"{celsius} is equal to {fahrenheite}")
    elif choice == 3:
        print("Goodbye!!")
        break
    else:
        print("Invalid choice. Please try again")

