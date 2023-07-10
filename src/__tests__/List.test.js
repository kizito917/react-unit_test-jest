import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import List from "../components/List";

test('renders component', () => {
    render(<List />);
});

describe('API related test', () => {
    beforeEach(async () => {
        const fakeUsers = [
            {
                id: 1,
                name: 'John Doe', 
                email: 'john@gmail.com',
                username: 'Johnny',
                phone: '+2349098812189',
                website: 'john.xyz.com',
            },
            {
                id: 2,
                name: 'Alexa Graham',
                email: 'alexis@gmail.com',
                username: 'Alexa12',
                phone: '+2349987129189',
                website: 'alexis.brr.com',
            }
        ]
    
        // Mock the API call and return the fake users
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(fakeUsers),
        });
    
        render(<List />);
    
        // Wait for the loading text to disappear
        await waitFor(() =>
            expect(screen.queryByText('Users data loading...')).not.toBeInTheDocument()
        );
    
    });

    afterEach(() => {
        // Restore the original fetch implementation
        global.fetch.mockRestore();
    });

    test('api call immediately page gets loaded', () => {
        // Check if the users are rendered correctly
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Alexa Graham')).toBeInTheDocument();
    });
    
    test('test for api call on click of view details button in table', () => {
        const userDetail = {
            email: "Sincere@april.biz",
            id: 1,
            name: "Leanne Graham",
            phone: "1-770-736-8031 x56442",
            username: "Bret",
            website: "hildegard.org",
        }

        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValueOnce(userDetail),
        });

        const viewDetailsButton = screen.getAllByRole('button', { name: /View details/i });
        viewDetailsButton.forEach((button) => {
            fireEvent.click(button);
        });
    });
});