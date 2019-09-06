import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => { // объединяет тесты
    test("status from props should be in the state", () => { // сам тест
        const component = create(<ProfileStatus status={'test_status'}/>); // создаем тестируемый компонент с нужными пропсами
        const instance = component.getInstance(); // получение экземпляра созданного объекта класса
        expect(instance.state.status).toBe('test_status'); // основная проверка
    });
    test("after creation span should be displayed", () => { // сам тест
        const component = create(<ProfileStatus status={'test_status'}/>); // создаем тестируемый компонент с нужными пропсами
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull(); // основная проверка
    });
    test("after creation input should be displayed", () => { // сам тест
        const component = create(<ProfileStatus status={'test_status'}/>); // создаем тестируемый компонент с нужными пропсами
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow(); // основная проверка
    });
    test("after creation span should be displayed with correct status", () => { // сам тест
        const component = create(<ProfileStatus status='test_status'/>); // создаем тестируемый компонент с нужными пропсами
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[1]).toBe('test_status'); // основная проверка
    });
    test("input should be displayed in editMode instead of span", () => { // сам тест
        const component = create(<ProfileStatus status='test_status'/>); // создаем тестируемый компонент с нужными пропсами
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('test_status'); // основная проверка
    });
    test("callback should be called", () => { // сам тест
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='test_status' updateStatus={mockCallback}/>); // создаем тестируемый компонент с нужными пропсами
        let instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1); // основная проверка
    });
});