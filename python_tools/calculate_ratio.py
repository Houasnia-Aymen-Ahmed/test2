def calculate_ratio(number):
    width_ratio = number * (100 / 375)
    height_ratio = number * (100 / 812)
    return width_ratio, height_ratio

def print_ratios(numbers):
    print("Number\tWidth Ratio\tHeight Ratio")
    for num in numbers:
        width_ratio, height_ratio = calculate_ratio(num)
        print(f"{num}\t{width_ratio:.4f}\t\t{height_ratio:.4f}")

def main():
    numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 25, 27, 28, 30, 35]
    print_ratios(numbers)

    while True:
        try:
            new_number = int(input("Enter a new number (or enter 0 to exit): "))
            if new_number == 0:
                break
            numbers.append(new_number)
            print_ratios(numbers)
        except ValueError:
            print("Please enter a valid number.")

if __name__ == "__main__":
    main()
