import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { components } from "react-select";

const DefaultItemHeight = 33;

// https://www.botsplash.com/post/optimize-your-react-select-component-to-smoothly-render-10k-data
export const CustomOption = ({ children, ...props }) => {
	// eslint-disable-next-line no-unused-vars
	const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
	const newProps = { ...props, innerProps: rest };
	return <components.Option {...newProps}>{children}</components.Option>;
};

export const CustomMenuList = ({ options, children, maxHeight, getValue }) => {
	const [value] = getValue();
	const initialOffset = options.indexOf(value) * DefaultItemHeight;
	const childrenOptions = React.Children.toArray(children);
	const wrapperHeight =
		maxHeight < childrenOptions.length * DefaultItemHeight
			? maxHeight
			: childrenOptions.length * DefaultItemHeight;

	const parentRef = useRef<HTMLDivElement>(null);

	const rowVirtualizer = useVirtualizer({
		count: childrenOptions.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => DefaultItemHeight,
		initialOffset,
	});

	return (
		<>
			<div
				ref={parentRef}
				style={{
					height: `${wrapperHeight + 6}px`,
					overflow: "auto",
				}}
			>
				<div
					style={{
						height: `${rowVirtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}
				>
					{rowVirtualizer.getVirtualItems().map(virtualItem => (
						<div
							key={virtualItem.key}
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: `${virtualItem.size}px`,
								transform: `translateY(${virtualItem.start}px)`,
							}}
						>
							{children[virtualItem.index]}
						</div>
					))}
				</div>
			</div>
		</>
	);
};
