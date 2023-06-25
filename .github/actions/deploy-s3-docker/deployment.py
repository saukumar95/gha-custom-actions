from os import environ, rename

def run():
    source_path = environ['INPUT_SOURCE-PATH']
    destination_path = environ['INPUT_DESTINATION-PATH']
    rename(source_path, destination_path)
    print(f"Inputs {source_path}, {destination_path}")

if __name__ == '__main__':
    run()
