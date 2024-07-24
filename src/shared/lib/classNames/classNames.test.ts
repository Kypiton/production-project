import classNames from './classNames';

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('class')).toBe(classNames('class'))
	})

	test('with additional classname', () => {
		const expected = 'class class1 class2'
		expect(classNames('class', {}, ['class1', 'class2'])).toBe(classNames(expected))
	})
	test('with mods that are true', () => {
		const expected = 'class class1 class2 hovered scrollable'
		expect(classNames(
			'class',
			{ hovered: true, scrollable: true },
			['class1', 'class2']
		)).toBe(classNames(expected))
	})
	test('with mods that are false', () => {
		const expected = 'class class1 class2'
		expect(classNames(
			'class',
			{ hovered: false, scrollable: false },
			['class1', 'class2']
		)).toBe(classNames(expected))
	})
	test('with mods that are undefined', () => {
		const expected = 'class class1 class2'
		expect(classNames(
			'class',
			{ hovered: undefined, scrollable: undefined },
			['class1', 'class2']
		)).toBe(classNames(expected))
	})
})