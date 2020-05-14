import * as $protobuf from "protobufjs";
/** Namespace flyteidl. */
export namespace flyteidl {

    /** Namespace core. */
    namespace core {

        /** Properties of a ConnectionSet. */
        interface IConnectionSet {

            /** ConnectionSet downstream */
            downstream?: ({ [k: string]: flyteidl.core.ConnectionSet.IIdList }|null);

            /** ConnectionSet upstream */
            upstream?: ({ [k: string]: flyteidl.core.ConnectionSet.IIdList }|null);
        }

        /** Represents a ConnectionSet. */
        class ConnectionSet implements IConnectionSet {

            /**
             * Constructs a new ConnectionSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IConnectionSet);

            /** ConnectionSet downstream. */
            public downstream: { [k: string]: flyteidl.core.ConnectionSet.IIdList };

            /** ConnectionSet upstream. */
            public upstream: { [k: string]: flyteidl.core.ConnectionSet.IIdList };

            /**
             * Creates a new ConnectionSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConnectionSet instance
             */
            public static create(properties?: flyteidl.core.IConnectionSet): flyteidl.core.ConnectionSet;

            /**
             * Encodes the specified ConnectionSet message. Does not implicitly {@link flyteidl.core.ConnectionSet.verify|verify} messages.
             * @param message ConnectionSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IConnectionSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConnectionSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConnectionSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ConnectionSet;

            /**
             * Verifies a ConnectionSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ConnectionSet {

            /** Properties of an IdList. */
            interface IIdList {

                /** IdList ids */
                ids?: (string[]|null);
            }

            /** Represents an IdList. */
            class IdList implements IIdList {

                /**
                 * Constructs a new IdList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: flyteidl.core.ConnectionSet.IIdList);

                /** IdList ids. */
                public ids: string[];

                /**
                 * Creates a new IdList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IdList instance
                 */
                public static create(properties?: flyteidl.core.ConnectionSet.IIdList): flyteidl.core.ConnectionSet.IdList;

                /**
                 * Encodes the specified IdList message. Does not implicitly {@link flyteidl.core.ConnectionSet.IdList.verify|verify} messages.
                 * @param message IdList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: flyteidl.core.ConnectionSet.IIdList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IdList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IdList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ConnectionSet.IdList;

                /**
                 * Verifies an IdList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a CompiledWorkflow. */
        interface ICompiledWorkflow {

            /** CompiledWorkflow template */
            template?: (flyteidl.core.IWorkflowTemplate|null);

            /** CompiledWorkflow connections */
            connections?: (flyteidl.core.IConnectionSet|null);
        }

        /** Represents a CompiledWorkflow. */
        class CompiledWorkflow implements ICompiledWorkflow {

            /**
             * Constructs a new CompiledWorkflow.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ICompiledWorkflow);

            /** CompiledWorkflow template. */
            public template?: (flyteidl.core.IWorkflowTemplate|null);

            /** CompiledWorkflow connections. */
            public connections?: (flyteidl.core.IConnectionSet|null);

            /**
             * Creates a new CompiledWorkflow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompiledWorkflow instance
             */
            public static create(properties?: flyteidl.core.ICompiledWorkflow): flyteidl.core.CompiledWorkflow;

            /**
             * Encodes the specified CompiledWorkflow message. Does not implicitly {@link flyteidl.core.CompiledWorkflow.verify|verify} messages.
             * @param message CompiledWorkflow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ICompiledWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompiledWorkflow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompiledWorkflow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.CompiledWorkflow;

            /**
             * Verifies a CompiledWorkflow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a CompiledTask. */
        interface ICompiledTask {

            /** CompiledTask template */
            template?: (flyteidl.core.ITaskTemplate|null);
        }

        /** Represents a CompiledTask. */
        class CompiledTask implements ICompiledTask {

            /**
             * Constructs a new CompiledTask.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ICompiledTask);

            /** CompiledTask template. */
            public template?: (flyteidl.core.ITaskTemplate|null);

            /**
             * Creates a new CompiledTask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompiledTask instance
             */
            public static create(properties?: flyteidl.core.ICompiledTask): flyteidl.core.CompiledTask;

            /**
             * Encodes the specified CompiledTask message. Does not implicitly {@link flyteidl.core.CompiledTask.verify|verify} messages.
             * @param message CompiledTask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ICompiledTask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompiledTask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompiledTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.CompiledTask;

            /**
             * Verifies a CompiledTask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a CompiledWorkflowClosure. */
        interface ICompiledWorkflowClosure {

            /** CompiledWorkflowClosure primary */
            primary?: (flyteidl.core.ICompiledWorkflow|null);

            /** CompiledWorkflowClosure subWorkflows */
            subWorkflows?: (flyteidl.core.ICompiledWorkflow[]|null);

            /** CompiledWorkflowClosure tasks */
            tasks?: (flyteidl.core.ICompiledTask[]|null);
        }

        /** Represents a CompiledWorkflowClosure. */
        class CompiledWorkflowClosure implements ICompiledWorkflowClosure {

            /**
             * Constructs a new CompiledWorkflowClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ICompiledWorkflowClosure);

            /** CompiledWorkflowClosure primary. */
            public primary?: (flyteidl.core.ICompiledWorkflow|null);

            /** CompiledWorkflowClosure subWorkflows. */
            public subWorkflows: flyteidl.core.ICompiledWorkflow[];

            /** CompiledWorkflowClosure tasks. */
            public tasks: flyteidl.core.ICompiledTask[];

            /**
             * Creates a new CompiledWorkflowClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompiledWorkflowClosure instance
             */
            public static create(properties?: flyteidl.core.ICompiledWorkflowClosure): flyteidl.core.CompiledWorkflowClosure;

            /**
             * Encodes the specified CompiledWorkflowClosure message. Does not implicitly {@link flyteidl.core.CompiledWorkflowClosure.verify|verify} messages.
             * @param message CompiledWorkflowClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ICompiledWorkflowClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompiledWorkflowClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompiledWorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.CompiledWorkflowClosure;

            /**
             * Verifies a CompiledWorkflowClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an IfBlock. */
        interface IIfBlock {

            /** IfBlock condition */
            condition?: (flyteidl.core.IBooleanExpression|null);

            /** IfBlock thenNode */
            thenNode?: (flyteidl.core.INode|null);
        }

        /** Represents an IfBlock. */
        class IfBlock implements IIfBlock {

            /**
             * Constructs a new IfBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IIfBlock);

            /** IfBlock condition. */
            public condition?: (flyteidl.core.IBooleanExpression|null);

            /** IfBlock thenNode. */
            public thenNode?: (flyteidl.core.INode|null);

            /**
             * Creates a new IfBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IfBlock instance
             */
            public static create(properties?: flyteidl.core.IIfBlock): flyteidl.core.IfBlock;

            /**
             * Encodes the specified IfBlock message. Does not implicitly {@link flyteidl.core.IfBlock.verify|verify} messages.
             * @param message IfBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IIfBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IfBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IfBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.IfBlock;

            /**
             * Verifies an IfBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an IfElseBlock. */
        interface IIfElseBlock {

            /** IfElseBlock case */
            "case"?: (flyteidl.core.IIfBlock|null);

            /** IfElseBlock other */
            other?: (flyteidl.core.IIfBlock[]|null);

            /** IfElseBlock elseNode */
            elseNode?: (flyteidl.core.INode|null);

            /** IfElseBlock error */
            error?: (flyteidl.core.IError|null);
        }

        /** Represents an IfElseBlock. */
        class IfElseBlock implements IIfElseBlock {

            /**
             * Constructs a new IfElseBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IIfElseBlock);

            /** IfElseBlock case. */
            public case?: (flyteidl.core.IIfBlock|null);

            /** IfElseBlock other. */
            public other: flyteidl.core.IIfBlock[];

            /** IfElseBlock elseNode. */
            public elseNode?: (flyteidl.core.INode|null);

            /** IfElseBlock error. */
            public error?: (flyteidl.core.IError|null);

            /** IfElseBlock default. */
            public default_?: ("elseNode"|"error");

            /**
             * Creates a new IfElseBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IfElseBlock instance
             */
            public static create(properties?: flyteidl.core.IIfElseBlock): flyteidl.core.IfElseBlock;

            /**
             * Encodes the specified IfElseBlock message. Does not implicitly {@link flyteidl.core.IfElseBlock.verify|verify} messages.
             * @param message IfElseBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IIfElseBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IfElseBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IfElseBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.IfElseBlock;

            /**
             * Verifies an IfElseBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BranchNode. */
        interface IBranchNode {

            /** BranchNode ifElse */
            ifElse?: (flyteidl.core.IIfElseBlock|null);
        }

        /** Represents a BranchNode. */
        class BranchNode implements IBranchNode {

            /**
             * Constructs a new BranchNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBranchNode);

            /** BranchNode ifElse. */
            public ifElse?: (flyteidl.core.IIfElseBlock|null);

            /**
             * Creates a new BranchNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BranchNode instance
             */
            public static create(properties?: flyteidl.core.IBranchNode): flyteidl.core.BranchNode;

            /**
             * Encodes the specified BranchNode message. Does not implicitly {@link flyteidl.core.BranchNode.verify|verify} messages.
             * @param message BranchNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBranchNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BranchNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BranchNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BranchNode;

            /**
             * Verifies a BranchNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskNode. */
        interface ITaskNode {

            /** TaskNode referenceId */
            referenceId?: (flyteidl.core.IIdentifier|null);
        }

        /** Represents a TaskNode. */
        class TaskNode implements ITaskNode {

            /**
             * Constructs a new TaskNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskNode);

            /** TaskNode referenceId. */
            public referenceId?: (flyteidl.core.IIdentifier|null);

            /** TaskNode reference. */
            public reference?: "referenceId";

            /**
             * Creates a new TaskNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskNode instance
             */
            public static create(properties?: flyteidl.core.ITaskNode): flyteidl.core.TaskNode;

            /**
             * Encodes the specified TaskNode message. Does not implicitly {@link flyteidl.core.TaskNode.verify|verify} messages.
             * @param message TaskNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskNode;

            /**
             * Verifies a TaskNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowNode. */
        interface IWorkflowNode {

            /** WorkflowNode launchplanRef */
            launchplanRef?: (flyteidl.core.IIdentifier|null);

            /** WorkflowNode subWorkflowRef */
            subWorkflowRef?: (flyteidl.core.IIdentifier|null);
        }

        /** Represents a WorkflowNode. */
        class WorkflowNode implements IWorkflowNode {

            /**
             * Constructs a new WorkflowNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowNode);

            /** WorkflowNode launchplanRef. */
            public launchplanRef?: (flyteidl.core.IIdentifier|null);

            /** WorkflowNode subWorkflowRef. */
            public subWorkflowRef?: (flyteidl.core.IIdentifier|null);

            /** WorkflowNode reference. */
            public reference?: ("launchplanRef"|"subWorkflowRef");

            /**
             * Creates a new WorkflowNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowNode instance
             */
            public static create(properties?: flyteidl.core.IWorkflowNode): flyteidl.core.WorkflowNode;

            /**
             * Encodes the specified WorkflowNode message. Does not implicitly {@link flyteidl.core.WorkflowNode.verify|verify} messages.
             * @param message WorkflowNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowNode;

            /**
             * Verifies a WorkflowNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeMetadata. */
        interface INodeMetadata {

            /** NodeMetadata name */
            name?: (string|null);

            /** NodeMetadata timeout */
            timeout?: (google.protobuf.IDuration|null);

            /** NodeMetadata retries */
            retries?: (flyteidl.core.IRetryStrategy|null);

            /** NodeMetadata interruptible */
            interruptible?: (boolean|null);
        }

        /** Represents a NodeMetadata. */
        class NodeMetadata implements INodeMetadata {

            /**
             * Constructs a new NodeMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.INodeMetadata);

            /** NodeMetadata name. */
            public name: string;

            /** NodeMetadata timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /** NodeMetadata retries. */
            public retries?: (flyteidl.core.IRetryStrategy|null);

            /** NodeMetadata interruptible. */
            public interruptible: boolean;

            /** NodeMetadata interruptibleValue. */
            public interruptibleValue?: "interruptible";

            /**
             * Creates a new NodeMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeMetadata instance
             */
            public static create(properties?: flyteidl.core.INodeMetadata): flyteidl.core.NodeMetadata;

            /**
             * Encodes the specified NodeMetadata message. Does not implicitly {@link flyteidl.core.NodeMetadata.verify|verify} messages.
             * @param message NodeMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.INodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.NodeMetadata;

            /**
             * Verifies a NodeMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Alias. */
        interface IAlias {

            /** Alias var */
            "var"?: (string|null);

            /** Alias alias */
            alias?: (string|null);
        }

        /** Represents an Alias. */
        class Alias implements IAlias {

            /**
             * Constructs a new Alias.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IAlias);

            /** Alias var. */
            public var: string;

            /** Alias alias. */
            public alias: string;

            /**
             * Creates a new Alias instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Alias instance
             */
            public static create(properties?: flyteidl.core.IAlias): flyteidl.core.Alias;

            /**
             * Encodes the specified Alias message. Does not implicitly {@link flyteidl.core.Alias.verify|verify} messages.
             * @param message Alias message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IAlias, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Alias message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Alias
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Alias;

            /**
             * Verifies an Alias message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Node. */
        interface INode {

            /** Node id */
            id?: (string|null);

            /** Node metadata */
            metadata?: (flyteidl.core.INodeMetadata|null);

            /** Node inputs */
            inputs?: (flyteidl.core.IBinding[]|null);

            /** Node upstreamNodeIds */
            upstreamNodeIds?: (string[]|null);

            /** Node outputAliases */
            outputAliases?: (flyteidl.core.IAlias[]|null);

            /** Node taskNode */
            taskNode?: (flyteidl.core.ITaskNode|null);

            /** Node workflowNode */
            workflowNode?: (flyteidl.core.IWorkflowNode|null);

            /** Node branchNode */
            branchNode?: (flyteidl.core.IBranchNode|null);
        }

        /** Represents a Node. */
        class Node implements INode {

            /**
             * Constructs a new Node.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.INode);

            /** Node id. */
            public id: string;

            /** Node metadata. */
            public metadata?: (flyteidl.core.INodeMetadata|null);

            /** Node inputs. */
            public inputs: flyteidl.core.IBinding[];

            /** Node upstreamNodeIds. */
            public upstreamNodeIds: string[];

            /** Node outputAliases. */
            public outputAliases: flyteidl.core.IAlias[];

            /** Node taskNode. */
            public taskNode?: (flyteidl.core.ITaskNode|null);

            /** Node workflowNode. */
            public workflowNode?: (flyteidl.core.IWorkflowNode|null);

            /** Node branchNode. */
            public branchNode?: (flyteidl.core.IBranchNode|null);

            /** Node target. */
            public target?: ("taskNode"|"workflowNode"|"branchNode");

            /**
             * Creates a new Node instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Node instance
             */
            public static create(properties?: flyteidl.core.INode): flyteidl.core.Node;

            /**
             * Encodes the specified Node message. Does not implicitly {@link flyteidl.core.Node.verify|verify} messages.
             * @param message Node message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.INode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Node message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Node
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Node;

            /**
             * Verifies a Node message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowMetadata. */
        interface IWorkflowMetadata {

            /** WorkflowMetadata queuingBudget */
            queuingBudget?: (google.protobuf.IDuration|null);
        }

        /** Represents a WorkflowMetadata. */
        class WorkflowMetadata implements IWorkflowMetadata {

            /**
             * Constructs a new WorkflowMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowMetadata);

            /** WorkflowMetadata queuingBudget. */
            public queuingBudget?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WorkflowMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowMetadata instance
             */
            public static create(properties?: flyteidl.core.IWorkflowMetadata): flyteidl.core.WorkflowMetadata;

            /**
             * Encodes the specified WorkflowMetadata message. Does not implicitly {@link flyteidl.core.WorkflowMetadata.verify|verify} messages.
             * @param message WorkflowMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowMetadata;

            /**
             * Verifies a WorkflowMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowMetadataDefaults. */
        interface IWorkflowMetadataDefaults {

            /** WorkflowMetadataDefaults interruptible */
            interruptible?: (boolean|null);
        }

        /** Represents a WorkflowMetadataDefaults. */
        class WorkflowMetadataDefaults implements IWorkflowMetadataDefaults {

            /**
             * Constructs a new WorkflowMetadataDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowMetadataDefaults);

            /** WorkflowMetadataDefaults interruptible. */
            public interruptible: boolean;

            /**
             * Creates a new WorkflowMetadataDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowMetadataDefaults instance
             */
            public static create(properties?: flyteidl.core.IWorkflowMetadataDefaults): flyteidl.core.WorkflowMetadataDefaults;

            /**
             * Encodes the specified WorkflowMetadataDefaults message. Does not implicitly {@link flyteidl.core.WorkflowMetadataDefaults.verify|verify} messages.
             * @param message WorkflowMetadataDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowMetadataDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowMetadataDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowMetadataDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowMetadataDefaults;

            /**
             * Verifies a WorkflowMetadataDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowTemplate. */
        interface IWorkflowTemplate {

            /** WorkflowTemplate id */
            id?: (flyteidl.core.IIdentifier|null);

            /** WorkflowTemplate metadata */
            metadata?: (flyteidl.core.IWorkflowMetadata|null);

            /** WorkflowTemplate interface */
            "interface"?: (flyteidl.core.ITypedInterface|null);

            /** WorkflowTemplate nodes */
            nodes?: (flyteidl.core.INode[]|null);

            /** WorkflowTemplate outputs */
            outputs?: (flyteidl.core.IBinding[]|null);

            /** WorkflowTemplate failureNode */
            failureNode?: (flyteidl.core.INode|null);

            /** WorkflowTemplate metadataDefaults */
            metadataDefaults?: (flyteidl.core.IWorkflowMetadataDefaults|null);
        }

        /** Represents a WorkflowTemplate. */
        class WorkflowTemplate implements IWorkflowTemplate {

            /**
             * Constructs a new WorkflowTemplate.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowTemplate);

            /** WorkflowTemplate id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** WorkflowTemplate metadata. */
            public metadata?: (flyteidl.core.IWorkflowMetadata|null);

            /** WorkflowTemplate interface. */
            public interface?: (flyteidl.core.ITypedInterface|null);

            /** WorkflowTemplate nodes. */
            public nodes: flyteidl.core.INode[];

            /** WorkflowTemplate outputs. */
            public outputs: flyteidl.core.IBinding[];

            /** WorkflowTemplate failureNode. */
            public failureNode?: (flyteidl.core.INode|null);

            /** WorkflowTemplate metadataDefaults. */
            public metadataDefaults?: (flyteidl.core.IWorkflowMetadataDefaults|null);

            /**
             * Creates a new WorkflowTemplate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowTemplate instance
             */
            public static create(properties?: flyteidl.core.IWorkflowTemplate): flyteidl.core.WorkflowTemplate;

            /**
             * Encodes the specified WorkflowTemplate message. Does not implicitly {@link flyteidl.core.WorkflowTemplate.verify|verify} messages.
             * @param message WorkflowTemplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowTemplate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowTemplate;

            /**
             * Verifies a WorkflowTemplate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ComparisonExpression. */
        interface IComparisonExpression {

            /** ComparisonExpression operator */
            operator?: (flyteidl.core.ComparisonExpression.Operator|null);

            /** ComparisonExpression leftValue */
            leftValue?: (flyteidl.core.IOperand|null);

            /** ComparisonExpression rightValue */
            rightValue?: (flyteidl.core.IOperand|null);
        }

        /** Represents a ComparisonExpression. */
        class ComparisonExpression implements IComparisonExpression {

            /**
             * Constructs a new ComparisonExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IComparisonExpression);

            /** ComparisonExpression operator. */
            public operator: flyteidl.core.ComparisonExpression.Operator;

            /** ComparisonExpression leftValue. */
            public leftValue?: (flyteidl.core.IOperand|null);

            /** ComparisonExpression rightValue. */
            public rightValue?: (flyteidl.core.IOperand|null);

            /**
             * Creates a new ComparisonExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComparisonExpression instance
             */
            public static create(properties?: flyteidl.core.IComparisonExpression): flyteidl.core.ComparisonExpression;

            /**
             * Encodes the specified ComparisonExpression message. Does not implicitly {@link flyteidl.core.ComparisonExpression.verify|verify} messages.
             * @param message ComparisonExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IComparisonExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComparisonExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ComparisonExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ComparisonExpression;

            /**
             * Verifies a ComparisonExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ComparisonExpression {

            /** Operator enum. */
            enum Operator {
                EQ = 0,
                NEQ = 1,
                GT = 2,
                GTE = 3,
                LT = 4,
                LTE = 5
            }
        }

        /** Properties of an Operand. */
        interface IOperand {

            /** Operand primitive */
            primitive?: (flyteidl.core.IPrimitive|null);

            /** Operand var */
            "var"?: (string|null);
        }

        /** Represents an Operand. */
        class Operand implements IOperand {

            /**
             * Constructs a new Operand.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IOperand);

            /** Operand primitive. */
            public primitive?: (flyteidl.core.IPrimitive|null);

            /** Operand var. */
            public var: string;

            /** Operand val. */
            public val?: ("primitive"|"var");

            /**
             * Creates a new Operand instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operand instance
             */
            public static create(properties?: flyteidl.core.IOperand): flyteidl.core.Operand;

            /**
             * Encodes the specified Operand message. Does not implicitly {@link flyteidl.core.Operand.verify|verify} messages.
             * @param message Operand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IOperand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operand message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Operand;

            /**
             * Verifies an Operand message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BooleanExpression. */
        interface IBooleanExpression {

            /** BooleanExpression conjunction */
            conjunction?: (flyteidl.core.IConjunctionExpression|null);

            /** BooleanExpression comparison */
            comparison?: (flyteidl.core.IComparisonExpression|null);
        }

        /** Represents a BooleanExpression. */
        class BooleanExpression implements IBooleanExpression {

            /**
             * Constructs a new BooleanExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBooleanExpression);

            /** BooleanExpression conjunction. */
            public conjunction?: (flyteidl.core.IConjunctionExpression|null);

            /** BooleanExpression comparison. */
            public comparison?: (flyteidl.core.IComparisonExpression|null);

            /** BooleanExpression expr. */
            public expr?: ("conjunction"|"comparison");

            /**
             * Creates a new BooleanExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BooleanExpression instance
             */
            public static create(properties?: flyteidl.core.IBooleanExpression): flyteidl.core.BooleanExpression;

            /**
             * Encodes the specified BooleanExpression message. Does not implicitly {@link flyteidl.core.BooleanExpression.verify|verify} messages.
             * @param message BooleanExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBooleanExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BooleanExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BooleanExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BooleanExpression;

            /**
             * Verifies a BooleanExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ConjunctionExpression. */
        interface IConjunctionExpression {

            /** ConjunctionExpression operator */
            operator?: (flyteidl.core.ConjunctionExpression.LogicalOperator|null);

            /** ConjunctionExpression leftExpression */
            leftExpression?: (flyteidl.core.IBooleanExpression|null);

            /** ConjunctionExpression rightExpression */
            rightExpression?: (flyteidl.core.IBooleanExpression|null);
        }

        /** Represents a ConjunctionExpression. */
        class ConjunctionExpression implements IConjunctionExpression {

            /**
             * Constructs a new ConjunctionExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IConjunctionExpression);

            /** ConjunctionExpression operator. */
            public operator: flyteidl.core.ConjunctionExpression.LogicalOperator;

            /** ConjunctionExpression leftExpression. */
            public leftExpression?: (flyteidl.core.IBooleanExpression|null);

            /** ConjunctionExpression rightExpression. */
            public rightExpression?: (flyteidl.core.IBooleanExpression|null);

            /**
             * Creates a new ConjunctionExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConjunctionExpression instance
             */
            public static create(properties?: flyteidl.core.IConjunctionExpression): flyteidl.core.ConjunctionExpression;

            /**
             * Encodes the specified ConjunctionExpression message. Does not implicitly {@link flyteidl.core.ConjunctionExpression.verify|verify} messages.
             * @param message ConjunctionExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IConjunctionExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConjunctionExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConjunctionExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ConjunctionExpression;

            /**
             * Verifies a ConjunctionExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ConjunctionExpression {

            /** LogicalOperator enum. */
            enum LogicalOperator {
                AND = 0,
                OR = 1
            }
        }

        /** Properties of a Primitive. */
        interface IPrimitive {

            /** Primitive integer */
            integer?: (Long|null);

            /** Primitive floatValue */
            floatValue?: (number|null);

            /** Primitive stringValue */
            stringValue?: (string|null);

            /** Primitive boolean */
            boolean?: (boolean|null);

            /** Primitive datetime */
            datetime?: (google.protobuf.ITimestamp|null);

            /** Primitive duration */
            duration?: (google.protobuf.IDuration|null);
        }

        /** Represents a Primitive. */
        class Primitive implements IPrimitive {

            /**
             * Constructs a new Primitive.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IPrimitive);

            /** Primitive integer. */
            public integer: Long;

            /** Primitive floatValue. */
            public floatValue: number;

            /** Primitive stringValue. */
            public stringValue: string;

            /** Primitive boolean. */
            public boolean: boolean;

            /** Primitive datetime. */
            public datetime?: (google.protobuf.ITimestamp|null);

            /** Primitive duration. */
            public duration?: (google.protobuf.IDuration|null);

            /** Primitive value. */
            public value?: ("integer"|"floatValue"|"stringValue"|"boolean"|"datetime"|"duration");

            /**
             * Creates a new Primitive instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Primitive instance
             */
            public static create(properties?: flyteidl.core.IPrimitive): flyteidl.core.Primitive;

            /**
             * Encodes the specified Primitive message. Does not implicitly {@link flyteidl.core.Primitive.verify|verify} messages.
             * @param message Primitive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IPrimitive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Primitive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Primitive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Primitive;

            /**
             * Verifies a Primitive message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Void. */
        interface IVoid {
        }

        /** Represents a Void. */
        class Void implements IVoid {

            /**
             * Constructs a new Void.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IVoid);

            /**
             * Creates a new Void instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Void instance
             */
            public static create(properties?: flyteidl.core.IVoid): flyteidl.core.Void;

            /**
             * Encodes the specified Void message. Does not implicitly {@link flyteidl.core.Void.verify|verify} messages.
             * @param message Void message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IVoid, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Void message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Void
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Void;

            /**
             * Verifies a Void message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Blob. */
        interface IBlob {

            /** Blob metadata */
            metadata?: (flyteidl.core.IBlobMetadata|null);

            /** Blob uri */
            uri?: (string|null);
        }

        /** Represents a Blob. */
        class Blob implements IBlob {

            /**
             * Constructs a new Blob.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBlob);

            /** Blob metadata. */
            public metadata?: (flyteidl.core.IBlobMetadata|null);

            /** Blob uri. */
            public uri: string;

            /**
             * Creates a new Blob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Blob instance
             */
            public static create(properties?: flyteidl.core.IBlob): flyteidl.core.Blob;

            /**
             * Encodes the specified Blob message. Does not implicitly {@link flyteidl.core.Blob.verify|verify} messages.
             * @param message Blob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Blob message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Blob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Blob;

            /**
             * Verifies a Blob message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BlobMetadata. */
        interface IBlobMetadata {

            /** BlobMetadata type */
            type?: (flyteidl.core.IBlobType|null);
        }

        /** Represents a BlobMetadata. */
        class BlobMetadata implements IBlobMetadata {

            /**
             * Constructs a new BlobMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBlobMetadata);

            /** BlobMetadata type. */
            public type?: (flyteidl.core.IBlobType|null);

            /**
             * Creates a new BlobMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlobMetadata instance
             */
            public static create(properties?: flyteidl.core.IBlobMetadata): flyteidl.core.BlobMetadata;

            /**
             * Encodes the specified BlobMetadata message. Does not implicitly {@link flyteidl.core.BlobMetadata.verify|verify} messages.
             * @param message BlobMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBlobMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlobMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlobMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BlobMetadata;

            /**
             * Verifies a BlobMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Binary. */
        interface IBinary {

            /** Binary value */
            value?: (Uint8Array|null);

            /** Binary tag */
            tag?: (string|null);
        }

        /** Represents a Binary. */
        class Binary implements IBinary {

            /**
             * Constructs a new Binary.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBinary);

            /** Binary value. */
            public value: Uint8Array;

            /** Binary tag. */
            public tag: string;

            /**
             * Creates a new Binary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Binary instance
             */
            public static create(properties?: flyteidl.core.IBinary): flyteidl.core.Binary;

            /**
             * Encodes the specified Binary message. Does not implicitly {@link flyteidl.core.Binary.verify|verify} messages.
             * @param message Binary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBinary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Binary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Binary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Binary;

            /**
             * Verifies a Binary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Schema. */
        interface ISchema {

            /** Schema uri */
            uri?: (string|null);

            /** Schema type */
            type?: (flyteidl.core.ISchemaType|null);
        }

        /** Represents a Schema. */
        class Schema implements ISchema {

            /**
             * Constructs a new Schema.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ISchema);

            /** Schema uri. */
            public uri: string;

            /** Schema type. */
            public type?: (flyteidl.core.ISchemaType|null);

            /**
             * Creates a new Schema instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Schema instance
             */
            public static create(properties?: flyteidl.core.ISchema): flyteidl.core.Schema;

            /**
             * Encodes the specified Schema message. Does not implicitly {@link flyteidl.core.Schema.verify|verify} messages.
             * @param message Schema message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Schema message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Schema;

            /**
             * Verifies a Schema message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Scalar. */
        interface IScalar {

            /** Scalar primitive */
            primitive?: (flyteidl.core.IPrimitive|null);

            /** Scalar blob */
            blob?: (flyteidl.core.IBlob|null);

            /** Scalar binary */
            binary?: (flyteidl.core.IBinary|null);

            /** Scalar schema */
            schema?: (flyteidl.core.ISchema|null);

            /** Scalar noneType */
            noneType?: (flyteidl.core.IVoid|null);

            /** Scalar error */
            error?: (flyteidl.core.IError|null);

            /** Scalar generic */
            generic?: (google.protobuf.IStruct|null);
        }

        /** Represents a Scalar. */
        class Scalar implements IScalar {

            /**
             * Constructs a new Scalar.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IScalar);

            /** Scalar primitive. */
            public primitive?: (flyteidl.core.IPrimitive|null);

            /** Scalar blob. */
            public blob?: (flyteidl.core.IBlob|null);

            /** Scalar binary. */
            public binary?: (flyteidl.core.IBinary|null);

            /** Scalar schema. */
            public schema?: (flyteidl.core.ISchema|null);

            /** Scalar noneType. */
            public noneType?: (flyteidl.core.IVoid|null);

            /** Scalar error. */
            public error?: (flyteidl.core.IError|null);

            /** Scalar generic. */
            public generic?: (google.protobuf.IStruct|null);

            /** Scalar value. */
            public value?: ("primitive"|"blob"|"binary"|"schema"|"noneType"|"error"|"generic");

            /**
             * Creates a new Scalar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Scalar instance
             */
            public static create(properties?: flyteidl.core.IScalar): flyteidl.core.Scalar;

            /**
             * Encodes the specified Scalar message. Does not implicitly {@link flyteidl.core.Scalar.verify|verify} messages.
             * @param message Scalar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IScalar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Scalar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Scalar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Scalar;

            /**
             * Verifies a Scalar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Literal. */
        interface ILiteral {

            /** Literal scalar */
            scalar?: (flyteidl.core.IScalar|null);

            /** Literal collection */
            collection?: (flyteidl.core.ILiteralCollection|null);

            /** Literal map */
            map?: (flyteidl.core.ILiteralMap|null);
        }

        /** Represents a Literal. */
        class Literal implements ILiteral {

            /**
             * Constructs a new Literal.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteral);

            /** Literal scalar. */
            public scalar?: (flyteidl.core.IScalar|null);

            /** Literal collection. */
            public collection?: (flyteidl.core.ILiteralCollection|null);

            /** Literal map. */
            public map?: (flyteidl.core.ILiteralMap|null);

            /** Literal value. */
            public value?: ("scalar"|"collection"|"map");

            /**
             * Creates a new Literal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Literal instance
             */
            public static create(properties?: flyteidl.core.ILiteral): flyteidl.core.Literal;

            /**
             * Encodes the specified Literal message. Does not implicitly {@link flyteidl.core.Literal.verify|verify} messages.
             * @param message Literal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteral, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Literal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Literal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Literal;

            /**
             * Verifies a Literal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LiteralCollection. */
        interface ILiteralCollection {

            /** LiteralCollection literals */
            literals?: (flyteidl.core.ILiteral[]|null);
        }

        /** Represents a LiteralCollection. */
        class LiteralCollection implements ILiteralCollection {

            /**
             * Constructs a new LiteralCollection.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteralCollection);

            /** LiteralCollection literals. */
            public literals: flyteidl.core.ILiteral[];

            /**
             * Creates a new LiteralCollection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralCollection instance
             */
            public static create(properties?: flyteidl.core.ILiteralCollection): flyteidl.core.LiteralCollection;

            /**
             * Encodes the specified LiteralCollection message. Does not implicitly {@link flyteidl.core.LiteralCollection.verify|verify} messages.
             * @param message LiteralCollection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteralCollection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralCollection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.LiteralCollection;

            /**
             * Verifies a LiteralCollection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LiteralMap. */
        interface ILiteralMap {

            /** LiteralMap literals */
            literals?: ({ [k: string]: flyteidl.core.ILiteral }|null);
        }

        /** Represents a LiteralMap. */
        class LiteralMap implements ILiteralMap {

            /**
             * Constructs a new LiteralMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteralMap);

            /** LiteralMap literals. */
            public literals: { [k: string]: flyteidl.core.ILiteral };

            /**
             * Creates a new LiteralMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralMap instance
             */
            public static create(properties?: flyteidl.core.ILiteralMap): flyteidl.core.LiteralMap;

            /**
             * Encodes the specified LiteralMap message. Does not implicitly {@link flyteidl.core.LiteralMap.verify|verify} messages.
             * @param message LiteralMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteralMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.LiteralMap;

            /**
             * Verifies a LiteralMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BindingDataCollection. */
        interface IBindingDataCollection {

            /** BindingDataCollection bindings */
            bindings?: (flyteidl.core.IBindingData[]|null);
        }

        /** Represents a BindingDataCollection. */
        class BindingDataCollection implements IBindingDataCollection {

            /**
             * Constructs a new BindingDataCollection.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBindingDataCollection);

            /** BindingDataCollection bindings. */
            public bindings: flyteidl.core.IBindingData[];

            /**
             * Creates a new BindingDataCollection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BindingDataCollection instance
             */
            public static create(properties?: flyteidl.core.IBindingDataCollection): flyteidl.core.BindingDataCollection;

            /**
             * Encodes the specified BindingDataCollection message. Does not implicitly {@link flyteidl.core.BindingDataCollection.verify|verify} messages.
             * @param message BindingDataCollection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBindingDataCollection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BindingDataCollection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BindingDataCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BindingDataCollection;

            /**
             * Verifies a BindingDataCollection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BindingDataMap. */
        interface IBindingDataMap {

            /** BindingDataMap bindings */
            bindings?: ({ [k: string]: flyteidl.core.IBindingData }|null);
        }

        /** Represents a BindingDataMap. */
        class BindingDataMap implements IBindingDataMap {

            /**
             * Constructs a new BindingDataMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBindingDataMap);

            /** BindingDataMap bindings. */
            public bindings: { [k: string]: flyteidl.core.IBindingData };

            /**
             * Creates a new BindingDataMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BindingDataMap instance
             */
            public static create(properties?: flyteidl.core.IBindingDataMap): flyteidl.core.BindingDataMap;

            /**
             * Encodes the specified BindingDataMap message. Does not implicitly {@link flyteidl.core.BindingDataMap.verify|verify} messages.
             * @param message BindingDataMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBindingDataMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BindingDataMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BindingDataMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BindingDataMap;

            /**
             * Verifies a BindingDataMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BindingData. */
        interface IBindingData {

            /** BindingData scalar */
            scalar?: (flyteidl.core.IScalar|null);

            /** BindingData collection */
            collection?: (flyteidl.core.IBindingDataCollection|null);

            /** BindingData promise */
            promise?: (flyteidl.core.IOutputReference|null);

            /** BindingData map */
            map?: (flyteidl.core.IBindingDataMap|null);
        }

        /** Represents a BindingData. */
        class BindingData implements IBindingData {

            /**
             * Constructs a new BindingData.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBindingData);

            /** BindingData scalar. */
            public scalar?: (flyteidl.core.IScalar|null);

            /** BindingData collection. */
            public collection?: (flyteidl.core.IBindingDataCollection|null);

            /** BindingData promise. */
            public promise?: (flyteidl.core.IOutputReference|null);

            /** BindingData map. */
            public map?: (flyteidl.core.IBindingDataMap|null);

            /** BindingData value. */
            public value?: ("scalar"|"collection"|"promise"|"map");

            /**
             * Creates a new BindingData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BindingData instance
             */
            public static create(properties?: flyteidl.core.IBindingData): flyteidl.core.BindingData;

            /**
             * Encodes the specified BindingData message. Does not implicitly {@link flyteidl.core.BindingData.verify|verify} messages.
             * @param message BindingData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBindingData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BindingData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BindingData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BindingData;

            /**
             * Verifies a BindingData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Binding. */
        interface IBinding {

            /** Binding var */
            "var"?: (string|null);

            /** Binding binding */
            binding?: (flyteidl.core.IBindingData|null);
        }

        /** Represents a Binding. */
        class Binding implements IBinding {

            /**
             * Constructs a new Binding.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBinding);

            /** Binding var. */
            public var: string;

            /** Binding binding. */
            public binding?: (flyteidl.core.IBindingData|null);

            /**
             * Creates a new Binding instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Binding instance
             */
            public static create(properties?: flyteidl.core.IBinding): flyteidl.core.Binding;

            /**
             * Encodes the specified Binding message. Does not implicitly {@link flyteidl.core.Binding.verify|verify} messages.
             * @param message Binding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Binding message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Binding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Binding;

            /**
             * Verifies a Binding message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a KeyValuePair. */
        interface IKeyValuePair {

            /** KeyValuePair key */
            key?: (string|null);

            /** KeyValuePair value */
            value?: (string|null);
        }

        /** Represents a KeyValuePair. */
        class KeyValuePair implements IKeyValuePair {

            /**
             * Constructs a new KeyValuePair.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IKeyValuePair);

            /** KeyValuePair key. */
            public key: string;

            /** KeyValuePair value. */
            public value: string;

            /**
             * Creates a new KeyValuePair instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyValuePair instance
             */
            public static create(properties?: flyteidl.core.IKeyValuePair): flyteidl.core.KeyValuePair;

            /**
             * Encodes the specified KeyValuePair message. Does not implicitly {@link flyteidl.core.KeyValuePair.verify|verify} messages.
             * @param message KeyValuePair message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyValuePair message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyValuePair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.KeyValuePair;

            /**
             * Verifies a KeyValuePair message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RetryStrategy. */
        interface IRetryStrategy {

            /** RetryStrategy retries */
            retries?: (number|null);
        }

        /** Represents a RetryStrategy. */
        class RetryStrategy implements IRetryStrategy {

            /**
             * Constructs a new RetryStrategy.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IRetryStrategy);

            /** RetryStrategy retries. */
            public retries: number;

            /**
             * Creates a new RetryStrategy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RetryStrategy instance
             */
            public static create(properties?: flyteidl.core.IRetryStrategy): flyteidl.core.RetryStrategy;

            /**
             * Encodes the specified RetryStrategy message. Does not implicitly {@link flyteidl.core.RetryStrategy.verify|verify} messages.
             * @param message RetryStrategy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IRetryStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RetryStrategy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RetryStrategy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.RetryStrategy;

            /**
             * Verifies a RetryStrategy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** SimpleType enum. */
        enum SimpleType {
            NONE = 0,
            INTEGER = 1,
            FLOAT = 2,
            STRING = 3,
            BOOLEAN = 4,
            DATETIME = 5,
            DURATION = 6,
            BINARY = 7,
            ERROR = 8,
            STRUCT = 9
        }

        /** Properties of a SchemaType. */
        interface ISchemaType {

            /** SchemaType columns */
            columns?: (flyteidl.core.SchemaType.ISchemaColumn[]|null);
        }

        /** Represents a SchemaType. */
        class SchemaType implements ISchemaType {

            /**
             * Constructs a new SchemaType.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ISchemaType);

            /** SchemaType columns. */
            public columns: flyteidl.core.SchemaType.ISchemaColumn[];

            /**
             * Creates a new SchemaType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SchemaType instance
             */
            public static create(properties?: flyteidl.core.ISchemaType): flyteidl.core.SchemaType;

            /**
             * Encodes the specified SchemaType message. Does not implicitly {@link flyteidl.core.SchemaType.verify|verify} messages.
             * @param message SchemaType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ISchemaType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SchemaType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SchemaType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.SchemaType;

            /**
             * Verifies a SchemaType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace SchemaType {

            /** Properties of a SchemaColumn. */
            interface ISchemaColumn {

                /** SchemaColumn name */
                name?: (string|null);

                /** SchemaColumn type */
                type?: (flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType|null);
            }

            /** Represents a SchemaColumn. */
            class SchemaColumn implements ISchemaColumn {

                /**
                 * Constructs a new SchemaColumn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: flyteidl.core.SchemaType.ISchemaColumn);

                /** SchemaColumn name. */
                public name: string;

                /** SchemaColumn type. */
                public type: flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType;

                /**
                 * Creates a new SchemaColumn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SchemaColumn instance
                 */
                public static create(properties?: flyteidl.core.SchemaType.ISchemaColumn): flyteidl.core.SchemaType.SchemaColumn;

                /**
                 * Encodes the specified SchemaColumn message. Does not implicitly {@link flyteidl.core.SchemaType.SchemaColumn.verify|verify} messages.
                 * @param message SchemaColumn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: flyteidl.core.SchemaType.ISchemaColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SchemaColumn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SchemaColumn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.SchemaType.SchemaColumn;

                /**
                 * Verifies a SchemaColumn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            namespace SchemaColumn {

                /** SchemaColumnType enum. */
                enum SchemaColumnType {
                    INTEGER = 0,
                    FLOAT = 1,
                    STRING = 2,
                    BOOLEAN = 3,
                    DATETIME = 4,
                    DURATION = 5
                }
            }
        }

        /** Properties of a BlobType. */
        interface IBlobType {

            /** BlobType format */
            format?: (string|null);

            /** BlobType dimensionality */
            dimensionality?: (flyteidl.core.BlobType.BlobDimensionality|null);
        }

        /** Represents a BlobType. */
        class BlobType implements IBlobType {

            /**
             * Constructs a new BlobType.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBlobType);

            /** BlobType format. */
            public format: string;

            /** BlobType dimensionality. */
            public dimensionality: flyteidl.core.BlobType.BlobDimensionality;

            /**
             * Creates a new BlobType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlobType instance
             */
            public static create(properties?: flyteidl.core.IBlobType): flyteidl.core.BlobType;

            /**
             * Encodes the specified BlobType message. Does not implicitly {@link flyteidl.core.BlobType.verify|verify} messages.
             * @param message BlobType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBlobType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlobType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlobType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BlobType;

            /**
             * Verifies a BlobType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace BlobType {

            /** BlobDimensionality enum. */
            enum BlobDimensionality {
                SINGLE = 0,
                MULTIPART = 1
            }
        }

        /** Properties of a LiteralType. */
        interface ILiteralType {

            /** LiteralType simple */
            simple?: (flyteidl.core.SimpleType|null);

            /** LiteralType schema */
            schema?: (flyteidl.core.ISchemaType|null);

            /** LiteralType collectionType */
            collectionType?: (flyteidl.core.ILiteralType|null);

            /** LiteralType mapValueType */
            mapValueType?: (flyteidl.core.ILiteralType|null);

            /** LiteralType blob */
            blob?: (flyteidl.core.IBlobType|null);

            /** LiteralType metadata */
            metadata?: (google.protobuf.IStruct|null);
        }

        /** Represents a LiteralType. */
        class LiteralType implements ILiteralType {

            /**
             * Constructs a new LiteralType.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteralType);

            /** LiteralType simple. */
            public simple: flyteidl.core.SimpleType;

            /** LiteralType schema. */
            public schema?: (flyteidl.core.ISchemaType|null);

            /** LiteralType collectionType. */
            public collectionType?: (flyteidl.core.ILiteralType|null);

            /** LiteralType mapValueType. */
            public mapValueType?: (flyteidl.core.ILiteralType|null);

            /** LiteralType blob. */
            public blob?: (flyteidl.core.IBlobType|null);

            /** LiteralType metadata. */
            public metadata?: (google.protobuf.IStruct|null);

            /** LiteralType type. */
            public type?: ("simple"|"schema"|"collectionType"|"mapValueType"|"blob");

            /**
             * Creates a new LiteralType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralType instance
             */
            public static create(properties?: flyteidl.core.ILiteralType): flyteidl.core.LiteralType;

            /**
             * Encodes the specified LiteralType message. Does not implicitly {@link flyteidl.core.LiteralType.verify|verify} messages.
             * @param message LiteralType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteralType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.LiteralType;

            /**
             * Verifies a LiteralType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an OutputReference. */
        interface IOutputReference {

            /** OutputReference nodeId */
            nodeId?: (string|null);

            /** OutputReference var */
            "var"?: (string|null);
        }

        /** Represents an OutputReference. */
        class OutputReference implements IOutputReference {

            /**
             * Constructs a new OutputReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IOutputReference);

            /** OutputReference nodeId. */
            public nodeId: string;

            /** OutputReference var. */
            public var: string;

            /**
             * Creates a new OutputReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OutputReference instance
             */
            public static create(properties?: flyteidl.core.IOutputReference): flyteidl.core.OutputReference;

            /**
             * Encodes the specified OutputReference message. Does not implicitly {@link flyteidl.core.OutputReference.verify|verify} messages.
             * @param message OutputReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IOutputReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OutputReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OutputReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.OutputReference;

            /**
             * Verifies an OutputReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Error. */
        interface IError {

            /** Error failedNodeId */
            failedNodeId?: (string|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IError);

            /** Error failedNodeId. */
            public failedNodeId: string;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: flyteidl.core.IError): flyteidl.core.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link flyteidl.core.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** ResourceType enum. */
        enum ResourceType {
            UNSPECIFIED = 0,
            TASK = 1,
            WORKFLOW = 2,
            LAUNCH_PLAN = 3
        }

        /** Properties of an Identifier. */
        interface IIdentifier {

            /** Identifier resourceType */
            resourceType?: (flyteidl.core.ResourceType|null);

            /** Identifier project */
            project?: (string|null);

            /** Identifier domain */
            domain?: (string|null);

            /** Identifier name */
            name?: (string|null);

            /** Identifier version */
            version?: (string|null);
        }

        /** Represents an Identifier. */
        class Identifier implements IIdentifier {

            /**
             * Constructs a new Identifier.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IIdentifier);

            /** Identifier resourceType. */
            public resourceType: flyteidl.core.ResourceType;

            /** Identifier project. */
            public project: string;

            /** Identifier domain. */
            public domain: string;

            /** Identifier name. */
            public name: string;

            /** Identifier version. */
            public version: string;

            /**
             * Creates a new Identifier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Identifier instance
             */
            public static create(properties?: flyteidl.core.IIdentifier): flyteidl.core.Identifier;

            /**
             * Encodes the specified Identifier message. Does not implicitly {@link flyteidl.core.Identifier.verify|verify} messages.
             * @param message Identifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Identifier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Identifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Identifier;

            /**
             * Verifies an Identifier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowExecutionIdentifier. */
        interface IWorkflowExecutionIdentifier {

            /** WorkflowExecutionIdentifier project */
            project?: (string|null);

            /** WorkflowExecutionIdentifier domain */
            domain?: (string|null);

            /** WorkflowExecutionIdentifier name */
            name?: (string|null);
        }

        /** Represents a WorkflowExecutionIdentifier. */
        class WorkflowExecutionIdentifier implements IWorkflowExecutionIdentifier {

            /**
             * Constructs a new WorkflowExecutionIdentifier.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowExecutionIdentifier);

            /** WorkflowExecutionIdentifier project. */
            public project: string;

            /** WorkflowExecutionIdentifier domain. */
            public domain: string;

            /** WorkflowExecutionIdentifier name. */
            public name: string;

            /**
             * Creates a new WorkflowExecutionIdentifier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecutionIdentifier instance
             */
            public static create(properties?: flyteidl.core.IWorkflowExecutionIdentifier): flyteidl.core.WorkflowExecutionIdentifier;

            /**
             * Encodes the specified WorkflowExecutionIdentifier message. Does not implicitly {@link flyteidl.core.WorkflowExecutionIdentifier.verify|verify} messages.
             * @param message WorkflowExecutionIdentifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowExecutionIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecutionIdentifier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecutionIdentifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowExecutionIdentifier;

            /**
             * Verifies a WorkflowExecutionIdentifier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionIdentifier. */
        interface INodeExecutionIdentifier {

            /** NodeExecutionIdentifier nodeId */
            nodeId?: (string|null);

            /** NodeExecutionIdentifier executionId */
            executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);
        }

        /** Represents a NodeExecutionIdentifier. */
        class NodeExecutionIdentifier implements INodeExecutionIdentifier {

            /**
             * Constructs a new NodeExecutionIdentifier.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.INodeExecutionIdentifier);

            /** NodeExecutionIdentifier nodeId. */
            public nodeId: string;

            /** NodeExecutionIdentifier executionId. */
            public executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /**
             * Creates a new NodeExecutionIdentifier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionIdentifier instance
             */
            public static create(properties?: flyteidl.core.INodeExecutionIdentifier): flyteidl.core.NodeExecutionIdentifier;

            /**
             * Encodes the specified NodeExecutionIdentifier message. Does not implicitly {@link flyteidl.core.NodeExecutionIdentifier.verify|verify} messages.
             * @param message NodeExecutionIdentifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.INodeExecutionIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionIdentifier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionIdentifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.NodeExecutionIdentifier;

            /**
             * Verifies a NodeExecutionIdentifier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionIdentifier. */
        interface ITaskExecutionIdentifier {

            /** TaskExecutionIdentifier taskId */
            taskId?: (flyteidl.core.IIdentifier|null);

            /** TaskExecutionIdentifier nodeExecutionId */
            nodeExecutionId?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** TaskExecutionIdentifier retryAttempt */
            retryAttempt?: (number|null);
        }

        /** Represents a TaskExecutionIdentifier. */
        class TaskExecutionIdentifier implements ITaskExecutionIdentifier {

            /**
             * Constructs a new TaskExecutionIdentifier.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskExecutionIdentifier);

            /** TaskExecutionIdentifier taskId. */
            public taskId?: (flyteidl.core.IIdentifier|null);

            /** TaskExecutionIdentifier nodeExecutionId. */
            public nodeExecutionId?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** TaskExecutionIdentifier retryAttempt. */
            public retryAttempt: number;

            /**
             * Creates a new TaskExecutionIdentifier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionIdentifier instance
             */
            public static create(properties?: flyteidl.core.ITaskExecutionIdentifier): flyteidl.core.TaskExecutionIdentifier;

            /**
             * Encodes the specified TaskExecutionIdentifier message. Does not implicitly {@link flyteidl.core.TaskExecutionIdentifier.verify|verify} messages.
             * @param message TaskExecutionIdentifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskExecutionIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionIdentifier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionIdentifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskExecutionIdentifier;

            /**
             * Verifies a TaskExecutionIdentifier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Variable. */
        interface IVariable {

            /** Variable type */
            type?: (flyteidl.core.ILiteralType|null);

            /** Variable description */
            description?: (string|null);
        }

        /** Represents a Variable. */
        class Variable implements IVariable {

            /**
             * Constructs a new Variable.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IVariable);

            /** Variable type. */
            public type?: (flyteidl.core.ILiteralType|null);

            /** Variable description. */
            public description: string;

            /**
             * Creates a new Variable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Variable instance
             */
            public static create(properties?: flyteidl.core.IVariable): flyteidl.core.Variable;

            /**
             * Encodes the specified Variable message. Does not implicitly {@link flyteidl.core.Variable.verify|verify} messages.
             * @param message Variable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Variable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Variable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Variable;

            /**
             * Verifies a Variable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a VariableMap. */
        interface IVariableMap {

            /** VariableMap variables */
            variables?: ({ [k: string]: flyteidl.core.IVariable }|null);
        }

        /** Represents a VariableMap. */
        class VariableMap implements IVariableMap {

            /**
             * Constructs a new VariableMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IVariableMap);

            /** VariableMap variables. */
            public variables: { [k: string]: flyteidl.core.IVariable };

            /**
             * Creates a new VariableMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VariableMap instance
             */
            public static create(properties?: flyteidl.core.IVariableMap): flyteidl.core.VariableMap;

            /**
             * Encodes the specified VariableMap message. Does not implicitly {@link flyteidl.core.VariableMap.verify|verify} messages.
             * @param message VariableMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IVariableMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VariableMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VariableMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.VariableMap;

            /**
             * Verifies a VariableMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TypedInterface. */
        interface ITypedInterface {

            /** TypedInterface inputs */
            inputs?: (flyteidl.core.IVariableMap|null);

            /** TypedInterface outputs */
            outputs?: (flyteidl.core.IVariableMap|null);
        }

        /** Represents a TypedInterface. */
        class TypedInterface implements ITypedInterface {

            /**
             * Constructs a new TypedInterface.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITypedInterface);

            /** TypedInterface inputs. */
            public inputs?: (flyteidl.core.IVariableMap|null);

            /** TypedInterface outputs. */
            public outputs?: (flyteidl.core.IVariableMap|null);

            /**
             * Creates a new TypedInterface instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TypedInterface instance
             */
            public static create(properties?: flyteidl.core.ITypedInterface): flyteidl.core.TypedInterface;

            /**
             * Encodes the specified TypedInterface message. Does not implicitly {@link flyteidl.core.TypedInterface.verify|verify} messages.
             * @param message TypedInterface message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITypedInterface, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TypedInterface message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TypedInterface
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TypedInterface;

            /**
             * Verifies a TypedInterface message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Parameter. */
        interface IParameter {

            /** Parameter var */
            "var"?: (flyteidl.core.IVariable|null);

            /** Parameter default */
            "default"?: (flyteidl.core.ILiteral|null);

            /** Parameter required */
            required?: (boolean|null);
        }

        /** Represents a Parameter. */
        class Parameter implements IParameter {

            /**
             * Constructs a new Parameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IParameter);

            /** Parameter var. */
            public var?: (flyteidl.core.IVariable|null);

            /** Parameter default. */
            public default?: (flyteidl.core.ILiteral|null);

            /** Parameter required. */
            public required: boolean;

            /** Parameter behavior. */
            public behavior?: ("default"|"required");

            /**
             * Creates a new Parameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Parameter instance
             */
            public static create(properties?: flyteidl.core.IParameter): flyteidl.core.Parameter;

            /**
             * Encodes the specified Parameter message. Does not implicitly {@link flyteidl.core.Parameter.verify|verify} messages.
             * @param message Parameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Parameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Parameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Parameter;

            /**
             * Verifies a Parameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ParameterMap. */
        interface IParameterMap {

            /** ParameterMap parameters */
            parameters?: ({ [k: string]: flyteidl.core.IParameter }|null);
        }

        /** Represents a ParameterMap. */
        class ParameterMap implements IParameterMap {

            /**
             * Constructs a new ParameterMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IParameterMap);

            /** ParameterMap parameters. */
            public parameters: { [k: string]: flyteidl.core.IParameter };

            /**
             * Creates a new ParameterMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParameterMap instance
             */
            public static create(properties?: flyteidl.core.IParameterMap): flyteidl.core.ParameterMap;

            /**
             * Encodes the specified ParameterMap message. Does not implicitly {@link flyteidl.core.ParameterMap.verify|verify} messages.
             * @param message ParameterMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IParameterMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParameterMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParameterMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ParameterMap;

            /**
             * Verifies a ParameterMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Resources. */
        interface IResources {

            /** Resources requests */
            requests?: (flyteidl.core.Resources.IResourceEntry[]|null);

            /** Resources limits */
            limits?: (flyteidl.core.Resources.IResourceEntry[]|null);
        }

        /** Represents a Resources. */
        class Resources implements IResources {

            /**
             * Constructs a new Resources.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IResources);

            /** Resources requests. */
            public requests: flyteidl.core.Resources.IResourceEntry[];

            /** Resources limits. */
            public limits: flyteidl.core.Resources.IResourceEntry[];

            /**
             * Creates a new Resources instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Resources instance
             */
            public static create(properties?: flyteidl.core.IResources): flyteidl.core.Resources;

            /**
             * Encodes the specified Resources message. Does not implicitly {@link flyteidl.core.Resources.verify|verify} messages.
             * @param message Resources message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IResources, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Resources message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Resources
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Resources;

            /**
             * Verifies a Resources message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace Resources {

            /** ResourceName enum. */
            enum ResourceName {
                UNKNOWN = 0,
                CPU = 1,
                GPU = 2,
                MEMORY = 3,
                STORAGE = 4
            }

            /** Properties of a ResourceEntry. */
            interface IResourceEntry {

                /** ResourceEntry name */
                name?: (flyteidl.core.Resources.ResourceName|null);

                /** ResourceEntry value */
                value?: (string|null);
            }

            /** Represents a ResourceEntry. */
            class ResourceEntry implements IResourceEntry {

                /**
                 * Constructs a new ResourceEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: flyteidl.core.Resources.IResourceEntry);

                /** ResourceEntry name. */
                public name: flyteidl.core.Resources.ResourceName;

                /** ResourceEntry value. */
                public value: string;

                /**
                 * Creates a new ResourceEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResourceEntry instance
                 */
                public static create(properties?: flyteidl.core.Resources.IResourceEntry): flyteidl.core.Resources.ResourceEntry;

                /**
                 * Encodes the specified ResourceEntry message. Does not implicitly {@link flyteidl.core.Resources.ResourceEntry.verify|verify} messages.
                 * @param message ResourceEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: flyteidl.core.Resources.IResourceEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResourceEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResourceEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Resources.ResourceEntry;

                /**
                 * Verifies a ResourceEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a RuntimeMetadata. */
        interface IRuntimeMetadata {

            /** RuntimeMetadata type */
            type?: (flyteidl.core.RuntimeMetadata.RuntimeType|null);

            /** RuntimeMetadata version */
            version?: (string|null);

            /** RuntimeMetadata flavor */
            flavor?: (string|null);
        }

        /** Represents a RuntimeMetadata. */
        class RuntimeMetadata implements IRuntimeMetadata {

            /**
             * Constructs a new RuntimeMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IRuntimeMetadata);

            /** RuntimeMetadata type. */
            public type: flyteidl.core.RuntimeMetadata.RuntimeType;

            /** RuntimeMetadata version. */
            public version: string;

            /** RuntimeMetadata flavor. */
            public flavor: string;

            /**
             * Creates a new RuntimeMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RuntimeMetadata instance
             */
            public static create(properties?: flyteidl.core.IRuntimeMetadata): flyteidl.core.RuntimeMetadata;

            /**
             * Encodes the specified RuntimeMetadata message. Does not implicitly {@link flyteidl.core.RuntimeMetadata.verify|verify} messages.
             * @param message RuntimeMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IRuntimeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RuntimeMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RuntimeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.RuntimeMetadata;

            /**
             * Verifies a RuntimeMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace RuntimeMetadata {

            /** RuntimeType enum. */
            enum RuntimeType {
                OTHER = 0,
                FLYTE_SDK = 1
            }
        }

        /** Properties of a TaskMetadata. */
        interface ITaskMetadata {

            /** TaskMetadata discoverable */
            discoverable?: (boolean|null);

            /** TaskMetadata runtime */
            runtime?: (flyteidl.core.IRuntimeMetadata|null);

            /** TaskMetadata timeout */
            timeout?: (google.protobuf.IDuration|null);

            /** TaskMetadata retries */
            retries?: (flyteidl.core.IRetryStrategy|null);

            /** TaskMetadata discoveryVersion */
            discoveryVersion?: (string|null);

            /** TaskMetadata deprecatedErrorMessage */
            deprecatedErrorMessage?: (string|null);

            /** TaskMetadata interruptible */
            interruptible?: (boolean|null);
        }

        /** Represents a TaskMetadata. */
        class TaskMetadata implements ITaskMetadata {

            /**
             * Constructs a new TaskMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskMetadata);

            /** TaskMetadata discoverable. */
            public discoverable: boolean;

            /** TaskMetadata runtime. */
            public runtime?: (flyteidl.core.IRuntimeMetadata|null);

            /** TaskMetadata timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /** TaskMetadata retries. */
            public retries?: (flyteidl.core.IRetryStrategy|null);

            /** TaskMetadata discoveryVersion. */
            public discoveryVersion: string;

            /** TaskMetadata deprecatedErrorMessage. */
            public deprecatedErrorMessage: string;

            /** TaskMetadata interruptible. */
            public interruptible: boolean;

            /** TaskMetadata interruptibleValue. */
            public interruptibleValue?: "interruptible";

            /**
             * Creates a new TaskMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskMetadata instance
             */
            public static create(properties?: flyteidl.core.ITaskMetadata): flyteidl.core.TaskMetadata;

            /**
             * Encodes the specified TaskMetadata message. Does not implicitly {@link flyteidl.core.TaskMetadata.verify|verify} messages.
             * @param message TaskMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskMetadata;

            /**
             * Verifies a TaskMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskTemplate. */
        interface ITaskTemplate {

            /** TaskTemplate id */
            id?: (flyteidl.core.IIdentifier|null);

            /** TaskTemplate type */
            type?: (string|null);

            /** TaskTemplate metadata */
            metadata?: (flyteidl.core.ITaskMetadata|null);

            /** TaskTemplate interface */
            "interface"?: (flyteidl.core.ITypedInterface|null);

            /** TaskTemplate custom */
            custom?: (google.protobuf.IStruct|null);

            /** TaskTemplate container */
            container?: (flyteidl.core.IContainer|null);
        }

        /** Represents a TaskTemplate. */
        class TaskTemplate implements ITaskTemplate {

            /**
             * Constructs a new TaskTemplate.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskTemplate);

            /** TaskTemplate id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** TaskTemplate type. */
            public type: string;

            /** TaskTemplate metadata. */
            public metadata?: (flyteidl.core.ITaskMetadata|null);

            /** TaskTemplate interface. */
            public interface?: (flyteidl.core.ITypedInterface|null);

            /** TaskTemplate custom. */
            public custom?: (google.protobuf.IStruct|null);

            /** TaskTemplate container. */
            public container?: (flyteidl.core.IContainer|null);

            /** TaskTemplate target. */
            public target?: "container";

            /**
             * Creates a new TaskTemplate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskTemplate instance
             */
            public static create(properties?: flyteidl.core.ITaskTemplate): flyteidl.core.TaskTemplate;

            /**
             * Encodes the specified TaskTemplate message. Does not implicitly {@link flyteidl.core.TaskTemplate.verify|verify} messages.
             * @param message TaskTemplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskTemplate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskTemplate;

            /**
             * Verifies a TaskTemplate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ContainerPort. */
        interface IContainerPort {

            /** ContainerPort containerPort */
            containerPort?: (number|null);
        }

        /** Represents a ContainerPort. */
        class ContainerPort implements IContainerPort {

            /**
             * Constructs a new ContainerPort.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IContainerPort);

            /** ContainerPort containerPort. */
            public containerPort: number;

            /**
             * Creates a new ContainerPort instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContainerPort instance
             */
            public static create(properties?: flyteidl.core.IContainerPort): flyteidl.core.ContainerPort;

            /**
             * Encodes the specified ContainerPort message. Does not implicitly {@link flyteidl.core.ContainerPort.verify|verify} messages.
             * @param message ContainerPort message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IContainerPort, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContainerPort message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContainerPort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ContainerPort;

            /**
             * Verifies a ContainerPort message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Container. */
        interface IContainer {

            /** Container image */
            image?: (string|null);

            /** Container command */
            command?: (string[]|null);

            /** Container args */
            args?: (string[]|null);

            /** Container resources */
            resources?: (flyteidl.core.IResources|null);

            /** Container env */
            env?: (flyteidl.core.IKeyValuePair[]|null);

            /** Container config */
            config?: (flyteidl.core.IKeyValuePair[]|null);

            /** Container ports */
            ports?: (flyteidl.core.IContainerPort[]|null);
        }

        /** Represents a Container. */
        class Container implements IContainer {

            /**
             * Constructs a new Container.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IContainer);

            /** Container image. */
            public image: string;

            /** Container command. */
            public command: string[];

            /** Container args. */
            public args: string[];

            /** Container resources. */
            public resources?: (flyteidl.core.IResources|null);

            /** Container env. */
            public env: flyteidl.core.IKeyValuePair[];

            /** Container config. */
            public config: flyteidl.core.IKeyValuePair[];

            /** Container ports. */
            public ports: flyteidl.core.IContainerPort[];

            /**
             * Creates a new Container instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Container instance
             */
            public static create(properties?: flyteidl.core.IContainer): flyteidl.core.Container;

            /**
             * Encodes the specified Container message. Does not implicitly {@link flyteidl.core.Container.verify|verify} messages.
             * @param message Container message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Container message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Container
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Container;

            /**
             * Verifies a Container message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a DynamicJobSpec. */
        interface IDynamicJobSpec {

            /** DynamicJobSpec nodes */
            nodes?: (flyteidl.core.INode[]|null);

            /** DynamicJobSpec minSuccesses */
            minSuccesses?: (Long|null);

            /** DynamicJobSpec outputs */
            outputs?: (flyteidl.core.IBinding[]|null);

            /** DynamicJobSpec tasks */
            tasks?: (flyteidl.core.ITaskTemplate[]|null);

            /** DynamicJobSpec subworkflows */
            subworkflows?: (flyteidl.core.IWorkflowTemplate[]|null);
        }

        /** Represents a DynamicJobSpec. */
        class DynamicJobSpec implements IDynamicJobSpec {

            /**
             * Constructs a new DynamicJobSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IDynamicJobSpec);

            /** DynamicJobSpec nodes. */
            public nodes: flyteidl.core.INode[];

            /** DynamicJobSpec minSuccesses. */
            public minSuccesses: Long;

            /** DynamicJobSpec outputs. */
            public outputs: flyteidl.core.IBinding[];

            /** DynamicJobSpec tasks. */
            public tasks: flyteidl.core.ITaskTemplate[];

            /** DynamicJobSpec subworkflows. */
            public subworkflows: flyteidl.core.IWorkflowTemplate[];

            /**
             * Creates a new DynamicJobSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicJobSpec instance
             */
            public static create(properties?: flyteidl.core.IDynamicJobSpec): flyteidl.core.DynamicJobSpec;

            /**
             * Encodes the specified DynamicJobSpec message. Does not implicitly {@link flyteidl.core.DynamicJobSpec.verify|verify} messages.
             * @param message DynamicJobSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IDynamicJobSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicJobSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicJobSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.DynamicJobSpec;

            /**
             * Verifies a DynamicJobSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ContainerError. */
        interface IContainerError {

            /** ContainerError code */
            code?: (string|null);

            /** ContainerError message */
            message?: (string|null);

            /** ContainerError kind */
            kind?: (flyteidl.core.ContainerError.Kind|null);

            /** ContainerError origin */
            origin?: (flyteidl.core.ExecutionError.ErrorKind|null);
        }

        /** Represents a ContainerError. */
        class ContainerError implements IContainerError {

            /**
             * Constructs a new ContainerError.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IContainerError);

            /** ContainerError code. */
            public code: string;

            /** ContainerError message. */
            public message: string;

            /** ContainerError kind. */
            public kind: flyteidl.core.ContainerError.Kind;

            /** ContainerError origin. */
            public origin: flyteidl.core.ExecutionError.ErrorKind;

            /**
             * Creates a new ContainerError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContainerError instance
             */
            public static create(properties?: flyteidl.core.IContainerError): flyteidl.core.ContainerError;

            /**
             * Encodes the specified ContainerError message. Does not implicitly {@link flyteidl.core.ContainerError.verify|verify} messages.
             * @param message ContainerError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IContainerError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContainerError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContainerError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ContainerError;

            /**
             * Verifies a ContainerError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ContainerError {

            /** Kind enum. */
            enum Kind {
                NON_RECOVERABLE = 0,
                RECOVERABLE = 1
            }
        }

        /** Properties of an ErrorDocument. */
        interface IErrorDocument {

            /** ErrorDocument error */
            error?: (flyteidl.core.IContainerError|null);
        }

        /** Represents an ErrorDocument. */
        class ErrorDocument implements IErrorDocument {

            /**
             * Constructs a new ErrorDocument.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IErrorDocument);

            /** ErrorDocument error. */
            public error?: (flyteidl.core.IContainerError|null);

            /**
             * Creates a new ErrorDocument instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorDocument instance
             */
            public static create(properties?: flyteidl.core.IErrorDocument): flyteidl.core.ErrorDocument;

            /**
             * Encodes the specified ErrorDocument message. Does not implicitly {@link flyteidl.core.ErrorDocument.verify|verify} messages.
             * @param message ErrorDocument message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IErrorDocument, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorDocument message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorDocument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ErrorDocument;

            /**
             * Verifies an ErrorDocument message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowExecution. */
        interface IWorkflowExecution {
        }

        /** Represents a WorkflowExecution. */
        class WorkflowExecution implements IWorkflowExecution {

            /**
             * Constructs a new WorkflowExecution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowExecution);

            /**
             * Creates a new WorkflowExecution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecution instance
             */
            public static create(properties?: flyteidl.core.IWorkflowExecution): flyteidl.core.WorkflowExecution;

            /**
             * Encodes the specified WorkflowExecution message. Does not implicitly {@link flyteidl.core.WorkflowExecution.verify|verify} messages.
             * @param message WorkflowExecution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowExecution;

            /**
             * Verifies a WorkflowExecution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace WorkflowExecution {

            /** Phase enum. */
            enum Phase {
                UNDEFINED = 0,
                QUEUED = 1,
                RUNNING = 2,
                SUCCEEDING = 3,
                SUCCEEDED = 4,
                FAILING = 5,
                FAILED = 6,
                ABORTED = 7,
                TIMED_OUT = 8
            }
        }

        /** Properties of a NodeExecution. */
        interface INodeExecution {
        }

        /** Represents a NodeExecution. */
        class NodeExecution implements INodeExecution {

            /**
             * Constructs a new NodeExecution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.INodeExecution);

            /**
             * Creates a new NodeExecution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecution instance
             */
            public static create(properties?: flyteidl.core.INodeExecution): flyteidl.core.NodeExecution;

            /**
             * Encodes the specified NodeExecution message. Does not implicitly {@link flyteidl.core.NodeExecution.verify|verify} messages.
             * @param message NodeExecution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.INodeExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.NodeExecution;

            /**
             * Verifies a NodeExecution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace NodeExecution {

            /** Phase enum. */
            enum Phase {
                UNDEFINED = 0,
                QUEUED = 1,
                RUNNING = 2,
                SUCCEEDED = 3,
                FAILING = 4,
                FAILED = 5,
                ABORTED = 6,
                SKIPPED = 7,
                TIMED_OUT = 8
            }
        }

        /** Properties of a TaskExecution. */
        interface ITaskExecution {
        }

        /** Represents a TaskExecution. */
        class TaskExecution implements ITaskExecution {

            /**
             * Constructs a new TaskExecution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskExecution);

            /**
             * Creates a new TaskExecution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecution instance
             */
            public static create(properties?: flyteidl.core.ITaskExecution): flyteidl.core.TaskExecution;

            /**
             * Encodes the specified TaskExecution message. Does not implicitly {@link flyteidl.core.TaskExecution.verify|verify} messages.
             * @param message TaskExecution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskExecution;

            /**
             * Verifies a TaskExecution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace TaskExecution {

            /** Phase enum. */
            enum Phase {
                UNDEFINED = 0,
                QUEUED = 1,
                RUNNING = 2,
                SUCCEEDED = 3,
                ABORTED = 4,
                FAILED = 5,
                INITIALIZING = 6,
                WAITING_FOR_RESOURCES = 7
            }
        }

        /** Properties of an ExecutionError. */
        interface IExecutionError {

            /** ExecutionError code */
            code?: (string|null);

            /** ExecutionError message */
            message?: (string|null);

            /** ExecutionError errorUri */
            errorUri?: (string|null);

            /** ExecutionError kind */
            kind?: (flyteidl.core.ExecutionError.ErrorKind|null);
        }

        /** Represents an ExecutionError. */
        class ExecutionError implements IExecutionError {

            /**
             * Constructs a new ExecutionError.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IExecutionError);

            /** ExecutionError code. */
            public code: string;

            /** ExecutionError message. */
            public message: string;

            /** ExecutionError errorUri. */
            public errorUri: string;

            /** ExecutionError kind. */
            public kind: flyteidl.core.ExecutionError.ErrorKind;

            /**
             * Creates a new ExecutionError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionError instance
             */
            public static create(properties?: flyteidl.core.IExecutionError): flyteidl.core.ExecutionError;

            /**
             * Encodes the specified ExecutionError message. Does not implicitly {@link flyteidl.core.ExecutionError.verify|verify} messages.
             * @param message ExecutionError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IExecutionError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ExecutionError;

            /**
             * Verifies an ExecutionError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ExecutionError {

            /** ErrorKind enum. */
            enum ErrorKind {
                UNKNOWN = 0,
                USER = 1,
                SYSTEM = 2
            }
        }

        /** Properties of a TaskLog. */
        interface ITaskLog {

            /** TaskLog uri */
            uri?: (string|null);

            /** TaskLog name */
            name?: (string|null);

            /** TaskLog messageFormat */
            messageFormat?: (flyteidl.core.TaskLog.MessageFormat|null);

            /** TaskLog ttl */
            ttl?: (google.protobuf.IDuration|null);
        }

        /** Represents a TaskLog. */
        class TaskLog implements ITaskLog {

            /**
             * Constructs a new TaskLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskLog);

            /** TaskLog uri. */
            public uri: string;

            /** TaskLog name. */
            public name: string;

            /** TaskLog messageFormat. */
            public messageFormat: flyteidl.core.TaskLog.MessageFormat;

            /** TaskLog ttl. */
            public ttl?: (google.protobuf.IDuration|null);

            /**
             * Creates a new TaskLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskLog instance
             */
            public static create(properties?: flyteidl.core.ITaskLog): flyteidl.core.TaskLog;

            /**
             * Encodes the specified TaskLog message. Does not implicitly {@link flyteidl.core.TaskLog.verify|verify} messages.
             * @param message TaskLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskLog;

            /**
             * Verifies a TaskLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace TaskLog {

            /** MessageFormat enum. */
            enum MessageFormat {
                UNKNOWN = 0,
                CSV = 1,
                JSON = 2
            }
        }

        /** Properties of a WorkflowClosure. */
        interface IWorkflowClosure {

            /** WorkflowClosure workflow */
            workflow?: (flyteidl.core.IWorkflowTemplate|null);

            /** WorkflowClosure tasks */
            tasks?: (flyteidl.core.ITaskTemplate[]|null);
        }

        /** Represents a WorkflowClosure. */
        class WorkflowClosure implements IWorkflowClosure {

            /**
             * Constructs a new WorkflowClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowClosure);

            /** WorkflowClosure workflow. */
            public workflow?: (flyteidl.core.IWorkflowTemplate|null);

            /** WorkflowClosure tasks. */
            public tasks: flyteidl.core.ITaskTemplate[];

            /**
             * Creates a new WorkflowClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowClosure instance
             */
            public static create(properties?: flyteidl.core.IWorkflowClosure): flyteidl.core.WorkflowClosure;

            /**
             * Encodes the specified WorkflowClosure message. Does not implicitly {@link flyteidl.core.WorkflowClosure.verify|verify} messages.
             * @param message WorkflowClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowClosure;

            /**
             * Verifies a WorkflowClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Namespace event. */
    namespace event {

        /** Properties of a WorkflowExecutionEvent. */
        interface IWorkflowExecutionEvent {

            /** WorkflowExecutionEvent executionId */
            executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** WorkflowExecutionEvent producerId */
            producerId?: (string|null);

            /** WorkflowExecutionEvent phase */
            phase?: (flyteidl.core.WorkflowExecution.Phase|null);

            /** WorkflowExecutionEvent occurredAt */
            occurredAt?: (google.protobuf.ITimestamp|null);

            /** WorkflowExecutionEvent outputUri */
            outputUri?: (string|null);

            /** WorkflowExecutionEvent error */
            error?: (flyteidl.core.IExecutionError|null);
        }

        /** Represents a WorkflowExecutionEvent. */
        class WorkflowExecutionEvent implements IWorkflowExecutionEvent {

            /**
             * Constructs a new WorkflowExecutionEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.event.IWorkflowExecutionEvent);

            /** WorkflowExecutionEvent executionId. */
            public executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** WorkflowExecutionEvent producerId. */
            public producerId: string;

            /** WorkflowExecutionEvent phase. */
            public phase: flyteidl.core.WorkflowExecution.Phase;

            /** WorkflowExecutionEvent occurredAt. */
            public occurredAt?: (google.protobuf.ITimestamp|null);

            /** WorkflowExecutionEvent outputUri. */
            public outputUri: string;

            /** WorkflowExecutionEvent error. */
            public error?: (flyteidl.core.IExecutionError|null);

            /** WorkflowExecutionEvent outputResult. */
            public outputResult?: ("outputUri"|"error");

            /**
             * Creates a new WorkflowExecutionEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecutionEvent instance
             */
            public static create(properties?: flyteidl.event.IWorkflowExecutionEvent): flyteidl.event.WorkflowExecutionEvent;

            /**
             * Encodes the specified WorkflowExecutionEvent message. Does not implicitly {@link flyteidl.event.WorkflowExecutionEvent.verify|verify} messages.
             * @param message WorkflowExecutionEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.event.IWorkflowExecutionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecutionEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecutionEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.event.WorkflowExecutionEvent;

            /**
             * Verifies a WorkflowExecutionEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionEvent. */
        interface INodeExecutionEvent {

            /** NodeExecutionEvent id */
            id?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** NodeExecutionEvent producerId */
            producerId?: (string|null);

            /** NodeExecutionEvent phase */
            phase?: (flyteidl.core.NodeExecution.Phase|null);

            /** NodeExecutionEvent occurredAt */
            occurredAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionEvent inputUri */
            inputUri?: (string|null);

            /** NodeExecutionEvent outputUri */
            outputUri?: (string|null);

            /** NodeExecutionEvent error */
            error?: (flyteidl.core.IExecutionError|null);

            /** NodeExecutionEvent workflowNodeMetadata */
            workflowNodeMetadata?: (flyteidl.event.IWorkflowNodeMetadata|null);

            /** NodeExecutionEvent parentTaskMetadata */
            parentTaskMetadata?: (flyteidl.event.IParentTaskExecutionMetadata|null);
        }

        /** Represents a NodeExecutionEvent. */
        class NodeExecutionEvent implements INodeExecutionEvent {

            /**
             * Constructs a new NodeExecutionEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.event.INodeExecutionEvent);

            /** NodeExecutionEvent id. */
            public id?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** NodeExecutionEvent producerId. */
            public producerId: string;

            /** NodeExecutionEvent phase. */
            public phase: flyteidl.core.NodeExecution.Phase;

            /** NodeExecutionEvent occurredAt. */
            public occurredAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionEvent inputUri. */
            public inputUri: string;

            /** NodeExecutionEvent outputUri. */
            public outputUri: string;

            /** NodeExecutionEvent error. */
            public error?: (flyteidl.core.IExecutionError|null);

            /** NodeExecutionEvent workflowNodeMetadata. */
            public workflowNodeMetadata?: (flyteidl.event.IWorkflowNodeMetadata|null);

            /** NodeExecutionEvent parentTaskMetadata. */
            public parentTaskMetadata?: (flyteidl.event.IParentTaskExecutionMetadata|null);

            /** NodeExecutionEvent outputResult. */
            public outputResult?: ("outputUri"|"error");

            /** NodeExecutionEvent targetMetadata. */
            public targetMetadata?: "workflowNodeMetadata";

            /**
             * Creates a new NodeExecutionEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionEvent instance
             */
            public static create(properties?: flyteidl.event.INodeExecutionEvent): flyteidl.event.NodeExecutionEvent;

            /**
             * Encodes the specified NodeExecutionEvent message. Does not implicitly {@link flyteidl.event.NodeExecutionEvent.verify|verify} messages.
             * @param message NodeExecutionEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.event.INodeExecutionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.event.NodeExecutionEvent;

            /**
             * Verifies a NodeExecutionEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowNodeMetadata. */
        interface IWorkflowNodeMetadata {

            /** WorkflowNodeMetadata executionId */
            executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);
        }

        /** Represents a WorkflowNodeMetadata. */
        class WorkflowNodeMetadata implements IWorkflowNodeMetadata {

            /**
             * Constructs a new WorkflowNodeMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.event.IWorkflowNodeMetadata);

            /** WorkflowNodeMetadata executionId. */
            public executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /**
             * Creates a new WorkflowNodeMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowNodeMetadata instance
             */
            public static create(properties?: flyteidl.event.IWorkflowNodeMetadata): flyteidl.event.WorkflowNodeMetadata;

            /**
             * Encodes the specified WorkflowNodeMetadata message. Does not implicitly {@link flyteidl.event.WorkflowNodeMetadata.verify|verify} messages.
             * @param message WorkflowNodeMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.event.IWorkflowNodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowNodeMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowNodeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.event.WorkflowNodeMetadata;

            /**
             * Verifies a WorkflowNodeMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ParentTaskExecutionMetadata. */
        interface IParentTaskExecutionMetadata {

            /** ParentTaskExecutionMetadata id */
            id?: (flyteidl.core.ITaskExecutionIdentifier|null);
        }

        /** Represents a ParentTaskExecutionMetadata. */
        class ParentTaskExecutionMetadata implements IParentTaskExecutionMetadata {

            /**
             * Constructs a new ParentTaskExecutionMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.event.IParentTaskExecutionMetadata);

            /** ParentTaskExecutionMetadata id. */
            public id?: (flyteidl.core.ITaskExecutionIdentifier|null);

            /**
             * Creates a new ParentTaskExecutionMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParentTaskExecutionMetadata instance
             */
            public static create(properties?: flyteidl.event.IParentTaskExecutionMetadata): flyteidl.event.ParentTaskExecutionMetadata;

            /**
             * Encodes the specified ParentTaskExecutionMetadata message. Does not implicitly {@link flyteidl.event.ParentTaskExecutionMetadata.verify|verify} messages.
             * @param message ParentTaskExecutionMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.event.IParentTaskExecutionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParentTaskExecutionMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParentTaskExecutionMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.event.ParentTaskExecutionMetadata;

            /**
             * Verifies a ParentTaskExecutionMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionEvent. */
        interface ITaskExecutionEvent {

            /** TaskExecutionEvent taskId */
            taskId?: (flyteidl.core.IIdentifier|null);

            /** TaskExecutionEvent parentNodeExecutionId */
            parentNodeExecutionId?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** TaskExecutionEvent retryAttempt */
            retryAttempt?: (number|null);

            /** TaskExecutionEvent phase */
            phase?: (flyteidl.core.TaskExecution.Phase|null);

            /** TaskExecutionEvent producerId */
            producerId?: (string|null);

            /** TaskExecutionEvent logs */
            logs?: (flyteidl.core.ITaskLog[]|null);

            /** TaskExecutionEvent occurredAt */
            occurredAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionEvent inputUri */
            inputUri?: (string|null);

            /** TaskExecutionEvent outputUri */
            outputUri?: (string|null);

            /** TaskExecutionEvent error */
            error?: (flyteidl.core.IExecutionError|null);

            /** TaskExecutionEvent customInfo */
            customInfo?: (google.protobuf.IStruct|null);

            /** TaskExecutionEvent phaseVersion */
            phaseVersion?: (number|null);
        }

        /** Represents a TaskExecutionEvent. */
        class TaskExecutionEvent implements ITaskExecutionEvent {

            /**
             * Constructs a new TaskExecutionEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.event.ITaskExecutionEvent);

            /** TaskExecutionEvent taskId. */
            public taskId?: (flyteidl.core.IIdentifier|null);

            /** TaskExecutionEvent parentNodeExecutionId. */
            public parentNodeExecutionId?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** TaskExecutionEvent retryAttempt. */
            public retryAttempt: number;

            /** TaskExecutionEvent phase. */
            public phase: flyteidl.core.TaskExecution.Phase;

            /** TaskExecutionEvent producerId. */
            public producerId: string;

            /** TaskExecutionEvent logs. */
            public logs: flyteidl.core.ITaskLog[];

            /** TaskExecutionEvent occurredAt. */
            public occurredAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionEvent inputUri. */
            public inputUri: string;

            /** TaskExecutionEvent outputUri. */
            public outputUri: string;

            /** TaskExecutionEvent error. */
            public error?: (flyteidl.core.IExecutionError|null);

            /** TaskExecutionEvent customInfo. */
            public customInfo?: (google.protobuf.IStruct|null);

            /** TaskExecutionEvent phaseVersion. */
            public phaseVersion: number;

            /** TaskExecutionEvent outputResult. */
            public outputResult?: ("outputUri"|"error");

            /**
             * Creates a new TaskExecutionEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionEvent instance
             */
            public static create(properties?: flyteidl.event.ITaskExecutionEvent): flyteidl.event.TaskExecutionEvent;

            /**
             * Encodes the specified TaskExecutionEvent message. Does not implicitly {@link flyteidl.event.TaskExecutionEvent.verify|verify} messages.
             * @param message TaskExecutionEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.event.ITaskExecutionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.event.TaskExecutionEvent;

            /**
             * Verifies a TaskExecutionEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Namespace admin. */
    namespace admin {

        /** Properties of a NamedEntityIdentifier. */
        interface INamedEntityIdentifier {

            /** NamedEntityIdentifier project */
            project?: (string|null);

            /** NamedEntityIdentifier domain */
            domain?: (string|null);

            /** NamedEntityIdentifier name */
            name?: (string|null);
        }

        /** Represents a NamedEntityIdentifier. */
        class NamedEntityIdentifier implements INamedEntityIdentifier {

            /**
             * Constructs a new NamedEntityIdentifier.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityIdentifier);

            /** NamedEntityIdentifier project. */
            public project: string;

            /** NamedEntityIdentifier domain. */
            public domain: string;

            /** NamedEntityIdentifier name. */
            public name: string;

            /**
             * Creates a new NamedEntityIdentifier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityIdentifier instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityIdentifier): flyteidl.admin.NamedEntityIdentifier;

            /**
             * Encodes the specified NamedEntityIdentifier message. Does not implicitly {@link flyteidl.admin.NamedEntityIdentifier.verify|verify} messages.
             * @param message NamedEntityIdentifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityIdentifier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityIdentifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityIdentifier;

            /**
             * Verifies a NamedEntityIdentifier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** NamedEntityState enum. */
        enum NamedEntityState {
            NAMED_ENTITY_ACTIVE = 0,
            NAMED_ENTITY_ARCHIVED = 1,
            SYSTEM_GENERATED = 2
        }

        /** Properties of a NamedEntityMetadata. */
        interface INamedEntityMetadata {

            /** NamedEntityMetadata description */
            description?: (string|null);

            /** NamedEntityMetadata state */
            state?: (flyteidl.admin.NamedEntityState|null);
        }

        /** Represents a NamedEntityMetadata. */
        class NamedEntityMetadata implements INamedEntityMetadata {

            /**
             * Constructs a new NamedEntityMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityMetadata);

            /** NamedEntityMetadata description. */
            public description: string;

            /** NamedEntityMetadata state. */
            public state: flyteidl.admin.NamedEntityState;

            /**
             * Creates a new NamedEntityMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityMetadata instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityMetadata): flyteidl.admin.NamedEntityMetadata;

            /**
             * Encodes the specified NamedEntityMetadata message. Does not implicitly {@link flyteidl.admin.NamedEntityMetadata.verify|verify} messages.
             * @param message NamedEntityMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityMetadata;

            /**
             * Verifies a NamedEntityMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NamedEntity. */
        interface INamedEntity {

            /** NamedEntity resourceType */
            resourceType?: (flyteidl.core.ResourceType|null);

            /** NamedEntity id */
            id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /** NamedEntity metadata */
            metadata?: (flyteidl.admin.INamedEntityMetadata|null);
        }

        /** Represents a NamedEntity. */
        class NamedEntity implements INamedEntity {

            /**
             * Constructs a new NamedEntity.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntity);

            /** NamedEntity resourceType. */
            public resourceType: flyteidl.core.ResourceType;

            /** NamedEntity id. */
            public id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /** NamedEntity metadata. */
            public metadata?: (flyteidl.admin.INamedEntityMetadata|null);

            /**
             * Creates a new NamedEntity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntity instance
             */
            public static create(properties?: flyteidl.admin.INamedEntity): flyteidl.admin.NamedEntity;

            /**
             * Encodes the specified NamedEntity message. Does not implicitly {@link flyteidl.admin.NamedEntity.verify|verify} messages.
             * @param message NamedEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntity;

            /**
             * Verifies a NamedEntity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Sort. */
        interface ISort {

            /** Sort key */
            key?: (string|null);

            /** Sort direction */
            direction?: (flyteidl.admin.Sort.Direction|null);
        }

        /** Represents a Sort. */
        class Sort implements ISort {

            /**
             * Constructs a new Sort.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ISort);

            /** Sort key. */
            public key: string;

            /** Sort direction. */
            public direction: flyteidl.admin.Sort.Direction;

            /**
             * Creates a new Sort instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sort instance
             */
            public static create(properties?: flyteidl.admin.ISort): flyteidl.admin.Sort;

            /**
             * Encodes the specified Sort message. Does not implicitly {@link flyteidl.admin.Sort.verify|verify} messages.
             * @param message Sort message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ISort, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sort message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Sort;

            /**
             * Verifies a Sort message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace Sort {

            /** Direction enum. */
            enum Direction {
                DESCENDING = 0,
                ASCENDING = 1
            }
        }

        /** Properties of a NamedEntityIdentifierListRequest. */
        interface INamedEntityIdentifierListRequest {

            /** NamedEntityIdentifierListRequest project */
            project?: (string|null);

            /** NamedEntityIdentifierListRequest domain */
            domain?: (string|null);

            /** NamedEntityIdentifierListRequest limit */
            limit?: (number|null);

            /** NamedEntityIdentifierListRequest token */
            token?: (string|null);

            /** NamedEntityIdentifierListRequest sortBy */
            sortBy?: (flyteidl.admin.ISort|null);

            /** NamedEntityIdentifierListRequest filters */
            filters?: (string|null);
        }

        /** Represents a NamedEntityIdentifierListRequest. */
        class NamedEntityIdentifierListRequest implements INamedEntityIdentifierListRequest {

            /**
             * Constructs a new NamedEntityIdentifierListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityIdentifierListRequest);

            /** NamedEntityIdentifierListRequest project. */
            public project: string;

            /** NamedEntityIdentifierListRequest domain. */
            public domain: string;

            /** NamedEntityIdentifierListRequest limit. */
            public limit: number;

            /** NamedEntityIdentifierListRequest token. */
            public token: string;

            /** NamedEntityIdentifierListRequest sortBy. */
            public sortBy?: (flyteidl.admin.ISort|null);

            /** NamedEntityIdentifierListRequest filters. */
            public filters: string;

            /**
             * Creates a new NamedEntityIdentifierListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityIdentifierListRequest instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityIdentifierListRequest): flyteidl.admin.NamedEntityIdentifierListRequest;

            /**
             * Encodes the specified NamedEntityIdentifierListRequest message. Does not implicitly {@link flyteidl.admin.NamedEntityIdentifierListRequest.verify|verify} messages.
             * @param message NamedEntityIdentifierListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityIdentifierListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityIdentifierListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityIdentifierListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityIdentifierListRequest;

            /**
             * Verifies a NamedEntityIdentifierListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NamedEntityListRequest. */
        interface INamedEntityListRequest {

            /** NamedEntityListRequest resourceType */
            resourceType?: (flyteidl.core.ResourceType|null);

            /** NamedEntityListRequest project */
            project?: (string|null);

            /** NamedEntityListRequest domain */
            domain?: (string|null);

            /** NamedEntityListRequest limit */
            limit?: (number|null);

            /** NamedEntityListRequest token */
            token?: (string|null);

            /** NamedEntityListRequest sortBy */
            sortBy?: (flyteidl.admin.ISort|null);

            /** NamedEntityListRequest filters */
            filters?: (string|null);
        }

        /** Represents a NamedEntityListRequest. */
        class NamedEntityListRequest implements INamedEntityListRequest {

            /**
             * Constructs a new NamedEntityListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityListRequest);

            /** NamedEntityListRequest resourceType. */
            public resourceType: flyteidl.core.ResourceType;

            /** NamedEntityListRequest project. */
            public project: string;

            /** NamedEntityListRequest domain. */
            public domain: string;

            /** NamedEntityListRequest limit. */
            public limit: number;

            /** NamedEntityListRequest token. */
            public token: string;

            /** NamedEntityListRequest sortBy. */
            public sortBy?: (flyteidl.admin.ISort|null);

            /** NamedEntityListRequest filters. */
            public filters: string;

            /**
             * Creates a new NamedEntityListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityListRequest instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityListRequest): flyteidl.admin.NamedEntityListRequest;

            /**
             * Encodes the specified NamedEntityListRequest message. Does not implicitly {@link flyteidl.admin.NamedEntityListRequest.verify|verify} messages.
             * @param message NamedEntityListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityListRequest;

            /**
             * Verifies a NamedEntityListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NamedEntityIdentifierList. */
        interface INamedEntityIdentifierList {

            /** NamedEntityIdentifierList entities */
            entities?: (flyteidl.admin.INamedEntityIdentifier[]|null);

            /** NamedEntityIdentifierList token */
            token?: (string|null);
        }

        /** Represents a NamedEntityIdentifierList. */
        class NamedEntityIdentifierList implements INamedEntityIdentifierList {

            /**
             * Constructs a new NamedEntityIdentifierList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityIdentifierList);

            /** NamedEntityIdentifierList entities. */
            public entities: flyteidl.admin.INamedEntityIdentifier[];

            /** NamedEntityIdentifierList token. */
            public token: string;

            /**
             * Creates a new NamedEntityIdentifierList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityIdentifierList instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityIdentifierList): flyteidl.admin.NamedEntityIdentifierList;

            /**
             * Encodes the specified NamedEntityIdentifierList message. Does not implicitly {@link flyteidl.admin.NamedEntityIdentifierList.verify|verify} messages.
             * @param message NamedEntityIdentifierList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityIdentifierList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityIdentifierList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityIdentifierList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityIdentifierList;

            /**
             * Verifies a NamedEntityIdentifierList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NamedEntityList. */
        interface INamedEntityList {

            /** NamedEntityList entities */
            entities?: (flyteidl.admin.INamedEntity[]|null);

            /** NamedEntityList token */
            token?: (string|null);
        }

        /** Represents a NamedEntityList. */
        class NamedEntityList implements INamedEntityList {

            /**
             * Constructs a new NamedEntityList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityList);

            /** NamedEntityList entities. */
            public entities: flyteidl.admin.INamedEntity[];

            /** NamedEntityList token. */
            public token: string;

            /**
             * Creates a new NamedEntityList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityList instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityList): flyteidl.admin.NamedEntityList;

            /**
             * Encodes the specified NamedEntityList message. Does not implicitly {@link flyteidl.admin.NamedEntityList.verify|verify} messages.
             * @param message NamedEntityList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityList;

            /**
             * Verifies a NamedEntityList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NamedEntityGetRequest. */
        interface INamedEntityGetRequest {

            /** NamedEntityGetRequest resourceType */
            resourceType?: (flyteidl.core.ResourceType|null);

            /** NamedEntityGetRequest id */
            id?: (flyteidl.admin.INamedEntityIdentifier|null);
        }

        /** Represents a NamedEntityGetRequest. */
        class NamedEntityGetRequest implements INamedEntityGetRequest {

            /**
             * Constructs a new NamedEntityGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityGetRequest);

            /** NamedEntityGetRequest resourceType. */
            public resourceType: flyteidl.core.ResourceType;

            /** NamedEntityGetRequest id. */
            public id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /**
             * Creates a new NamedEntityGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityGetRequest instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityGetRequest): flyteidl.admin.NamedEntityGetRequest;

            /**
             * Encodes the specified NamedEntityGetRequest message. Does not implicitly {@link flyteidl.admin.NamedEntityGetRequest.verify|verify} messages.
             * @param message NamedEntityGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityGetRequest;

            /**
             * Verifies a NamedEntityGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NamedEntityUpdateRequest. */
        interface INamedEntityUpdateRequest {

            /** NamedEntityUpdateRequest resourceType */
            resourceType?: (flyteidl.core.ResourceType|null);

            /** NamedEntityUpdateRequest id */
            id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /** NamedEntityUpdateRequest metadata */
            metadata?: (flyteidl.admin.INamedEntityMetadata|null);
        }

        /** Represents a NamedEntityUpdateRequest. */
        class NamedEntityUpdateRequest implements INamedEntityUpdateRequest {

            /**
             * Constructs a new NamedEntityUpdateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityUpdateRequest);

            /** NamedEntityUpdateRequest resourceType. */
            public resourceType: flyteidl.core.ResourceType;

            /** NamedEntityUpdateRequest id. */
            public id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /** NamedEntityUpdateRequest metadata. */
            public metadata?: (flyteidl.admin.INamedEntityMetadata|null);

            /**
             * Creates a new NamedEntityUpdateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityUpdateRequest instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityUpdateRequest): flyteidl.admin.NamedEntityUpdateRequest;

            /**
             * Encodes the specified NamedEntityUpdateRequest message. Does not implicitly {@link flyteidl.admin.NamedEntityUpdateRequest.verify|verify} messages.
             * @param message NamedEntityUpdateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityUpdateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityUpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityUpdateRequest;

            /**
             * Verifies a NamedEntityUpdateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NamedEntityUpdateResponse. */
        interface INamedEntityUpdateResponse {
        }

        /** Represents a NamedEntityUpdateResponse. */
        class NamedEntityUpdateResponse implements INamedEntityUpdateResponse {

            /**
             * Constructs a new NamedEntityUpdateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INamedEntityUpdateResponse);

            /**
             * Creates a new NamedEntityUpdateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NamedEntityUpdateResponse instance
             */
            public static create(properties?: flyteidl.admin.INamedEntityUpdateResponse): flyteidl.admin.NamedEntityUpdateResponse;

            /**
             * Encodes the specified NamedEntityUpdateResponse message. Does not implicitly {@link flyteidl.admin.NamedEntityUpdateResponse.verify|verify} messages.
             * @param message NamedEntityUpdateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INamedEntityUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NamedEntityUpdateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NamedEntityUpdateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NamedEntityUpdateResponse;

            /**
             * Verifies a NamedEntityUpdateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ObjectGetRequest. */
        interface IObjectGetRequest {

            /** ObjectGetRequest id */
            id?: (flyteidl.core.IIdentifier|null);
        }

        /** Represents an ObjectGetRequest. */
        class ObjectGetRequest implements IObjectGetRequest {

            /**
             * Constructs a new ObjectGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IObjectGetRequest);

            /** ObjectGetRequest id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /**
             * Creates a new ObjectGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ObjectGetRequest instance
             */
            public static create(properties?: flyteidl.admin.IObjectGetRequest): flyteidl.admin.ObjectGetRequest;

            /**
             * Encodes the specified ObjectGetRequest message. Does not implicitly {@link flyteidl.admin.ObjectGetRequest.verify|verify} messages.
             * @param message ObjectGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IObjectGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ObjectGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ObjectGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ObjectGetRequest;

            /**
             * Verifies an ObjectGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ResourceListRequest. */
        interface IResourceListRequest {

            /** ResourceListRequest id */
            id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /** ResourceListRequest limit */
            limit?: (number|null);

            /** ResourceListRequest token */
            token?: (string|null);

            /** ResourceListRequest filters */
            filters?: (string|null);

            /** ResourceListRequest sortBy */
            sortBy?: (flyteidl.admin.ISort|null);
        }

        /** Represents a ResourceListRequest. */
        class ResourceListRequest implements IResourceListRequest {

            /**
             * Constructs a new ResourceListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IResourceListRequest);

            /** ResourceListRequest id. */
            public id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /** ResourceListRequest limit. */
            public limit: number;

            /** ResourceListRequest token. */
            public token: string;

            /** ResourceListRequest filters. */
            public filters: string;

            /** ResourceListRequest sortBy. */
            public sortBy?: (flyteidl.admin.ISort|null);

            /**
             * Creates a new ResourceListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceListRequest instance
             */
            public static create(properties?: flyteidl.admin.IResourceListRequest): flyteidl.admin.ResourceListRequest;

            /**
             * Encodes the specified ResourceListRequest message. Does not implicitly {@link flyteidl.admin.ResourceListRequest.verify|verify} messages.
             * @param message ResourceListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IResourceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ResourceListRequest;

            /**
             * Verifies a ResourceListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EmailNotification. */
        interface IEmailNotification {

            /** EmailNotification recipientsEmail */
            recipientsEmail?: (string[]|null);
        }

        /** Represents an EmailNotification. */
        class EmailNotification implements IEmailNotification {

            /**
             * Constructs a new EmailNotification.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IEmailNotification);

            /** EmailNotification recipientsEmail. */
            public recipientsEmail: string[];

            /**
             * Creates a new EmailNotification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EmailNotification instance
             */
            public static create(properties?: flyteidl.admin.IEmailNotification): flyteidl.admin.EmailNotification;

            /**
             * Encodes the specified EmailNotification message. Does not implicitly {@link flyteidl.admin.EmailNotification.verify|verify} messages.
             * @param message EmailNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IEmailNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EmailNotification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EmailNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.EmailNotification;

            /**
             * Verifies an EmailNotification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a PagerDutyNotification. */
        interface IPagerDutyNotification {

            /** PagerDutyNotification recipientsEmail */
            recipientsEmail?: (string[]|null);
        }

        /** Represents a PagerDutyNotification. */
        class PagerDutyNotification implements IPagerDutyNotification {

            /**
             * Constructs a new PagerDutyNotification.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IPagerDutyNotification);

            /** PagerDutyNotification recipientsEmail. */
            public recipientsEmail: string[];

            /**
             * Creates a new PagerDutyNotification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PagerDutyNotification instance
             */
            public static create(properties?: flyteidl.admin.IPagerDutyNotification): flyteidl.admin.PagerDutyNotification;

            /**
             * Encodes the specified PagerDutyNotification message. Does not implicitly {@link flyteidl.admin.PagerDutyNotification.verify|verify} messages.
             * @param message PagerDutyNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IPagerDutyNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PagerDutyNotification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PagerDutyNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.PagerDutyNotification;

            /**
             * Verifies a PagerDutyNotification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a SlackNotification. */
        interface ISlackNotification {

            /** SlackNotification recipientsEmail */
            recipientsEmail?: (string[]|null);
        }

        /** Represents a SlackNotification. */
        class SlackNotification implements ISlackNotification {

            /**
             * Constructs a new SlackNotification.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ISlackNotification);

            /** SlackNotification recipientsEmail. */
            public recipientsEmail: string[];

            /**
             * Creates a new SlackNotification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SlackNotification instance
             */
            public static create(properties?: flyteidl.admin.ISlackNotification): flyteidl.admin.SlackNotification;

            /**
             * Encodes the specified SlackNotification message. Does not implicitly {@link flyteidl.admin.SlackNotification.verify|verify} messages.
             * @param message SlackNotification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ISlackNotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SlackNotification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SlackNotification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.SlackNotification;

            /**
             * Verifies a SlackNotification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Notification. */
        interface INotification {

            /** Notification phases */
            phases?: (flyteidl.core.WorkflowExecution.Phase[]|null);

            /** Notification email */
            email?: (flyteidl.admin.IEmailNotification|null);

            /** Notification pagerDuty */
            pagerDuty?: (flyteidl.admin.IPagerDutyNotification|null);

            /** Notification slack */
            slack?: (flyteidl.admin.ISlackNotification|null);
        }

        /** Represents a Notification. */
        class Notification implements INotification {

            /**
             * Constructs a new Notification.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INotification);

            /** Notification phases. */
            public phases: flyteidl.core.WorkflowExecution.Phase[];

            /** Notification email. */
            public email?: (flyteidl.admin.IEmailNotification|null);

            /** Notification pagerDuty. */
            public pagerDuty?: (flyteidl.admin.IPagerDutyNotification|null);

            /** Notification slack. */
            public slack?: (flyteidl.admin.ISlackNotification|null);

            /** Notification type. */
            public type?: ("email"|"pagerDuty"|"slack");

            /**
             * Creates a new Notification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Notification instance
             */
            public static create(properties?: flyteidl.admin.INotification): flyteidl.admin.Notification;

            /**
             * Encodes the specified Notification message. Does not implicitly {@link flyteidl.admin.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Notification;

            /**
             * Verifies a Notification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an UrlBlob. */
        interface IUrlBlob {

            /** UrlBlob url */
            url?: (string|null);

            /** UrlBlob bytes */
            bytes?: (Long|null);
        }

        /** Represents an UrlBlob. */
        class UrlBlob implements IUrlBlob {

            /**
             * Constructs a new UrlBlob.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IUrlBlob);

            /** UrlBlob url. */
            public url: string;

            /** UrlBlob bytes. */
            public bytes: Long;

            /**
             * Creates a new UrlBlob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UrlBlob instance
             */
            public static create(properties?: flyteidl.admin.IUrlBlob): flyteidl.admin.UrlBlob;

            /**
             * Encodes the specified UrlBlob message. Does not implicitly {@link flyteidl.admin.UrlBlob.verify|verify} messages.
             * @param message UrlBlob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IUrlBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UrlBlob message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UrlBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.UrlBlob;

            /**
             * Verifies an UrlBlob message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Labels. */
        interface ILabels {

            /** Labels values */
            values?: ({ [k: string]: string }|null);
        }

        /** Represents a Labels. */
        class Labels implements ILabels {

            /**
             * Constructs a new Labels.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILabels);

            /** Labels values. */
            public values: { [k: string]: string };

            /**
             * Creates a new Labels instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Labels instance
             */
            public static create(properties?: flyteidl.admin.ILabels): flyteidl.admin.Labels;

            /**
             * Encodes the specified Labels message. Does not implicitly {@link flyteidl.admin.Labels.verify|verify} messages.
             * @param message Labels message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILabels, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Labels message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Labels
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Labels;

            /**
             * Verifies a Labels message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Annotations. */
        interface IAnnotations {

            /** Annotations values */
            values?: ({ [k: string]: string }|null);
        }

        /** Represents an Annotations. */
        class Annotations implements IAnnotations {

            /**
             * Constructs a new Annotations.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IAnnotations);

            /** Annotations values. */
            public values: { [k: string]: string };

            /**
             * Creates a new Annotations instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Annotations instance
             */
            public static create(properties?: flyteidl.admin.IAnnotations): flyteidl.admin.Annotations;

            /**
             * Encodes the specified Annotations message. Does not implicitly {@link flyteidl.admin.Annotations.verify|verify} messages.
             * @param message Annotations message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IAnnotations, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Annotations message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Annotations
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Annotations;

            /**
             * Verifies an Annotations message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an AuthRole. */
        interface IAuthRole {

            /** AuthRole assumableIamRole */
            assumableIamRole?: (string|null);

            /** AuthRole kubernetesServiceAccount */
            kubernetesServiceAccount?: (string|null);
        }

        /** Represents an AuthRole. */
        class AuthRole implements IAuthRole {

            /**
             * Constructs a new AuthRole.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IAuthRole);

            /** AuthRole assumableIamRole. */
            public assumableIamRole: string;

            /** AuthRole kubernetesServiceAccount. */
            public kubernetesServiceAccount: string;

            /** AuthRole method. */
            public method?: ("assumableIamRole"|"kubernetesServiceAccount");

            /**
             * Creates a new AuthRole instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthRole instance
             */
            public static create(properties?: flyteidl.admin.IAuthRole): flyteidl.admin.AuthRole;

            /**
             * Encodes the specified AuthRole message. Does not implicitly {@link flyteidl.admin.AuthRole.verify|verify} messages.
             * @param message AuthRole message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IAuthRole, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthRole message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.AuthRole;

            /**
             * Verifies an AuthRole message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EventErrorAlreadyInTerminalState. */
        interface IEventErrorAlreadyInTerminalState {

            /** EventErrorAlreadyInTerminalState currentPhase */
            currentPhase?: (string|null);
        }

        /** Represents an EventErrorAlreadyInTerminalState. */
        class EventErrorAlreadyInTerminalState implements IEventErrorAlreadyInTerminalState {

            /**
             * Constructs a new EventErrorAlreadyInTerminalState.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IEventErrorAlreadyInTerminalState);

            /** EventErrorAlreadyInTerminalState currentPhase. */
            public currentPhase: string;

            /**
             * Creates a new EventErrorAlreadyInTerminalState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EventErrorAlreadyInTerminalState instance
             */
            public static create(properties?: flyteidl.admin.IEventErrorAlreadyInTerminalState): flyteidl.admin.EventErrorAlreadyInTerminalState;

            /**
             * Encodes the specified EventErrorAlreadyInTerminalState message. Does not implicitly {@link flyteidl.admin.EventErrorAlreadyInTerminalState.verify|verify} messages.
             * @param message EventErrorAlreadyInTerminalState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IEventErrorAlreadyInTerminalState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventErrorAlreadyInTerminalState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventErrorAlreadyInTerminalState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.EventErrorAlreadyInTerminalState;

            /**
             * Verifies an EventErrorAlreadyInTerminalState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EventFailureReason. */
        interface IEventFailureReason {

            /** EventFailureReason alreadyInTerminalState */
            alreadyInTerminalState?: (flyteidl.admin.IEventErrorAlreadyInTerminalState|null);
        }

        /** Represents an EventFailureReason. */
        class EventFailureReason implements IEventFailureReason {

            /**
             * Constructs a new EventFailureReason.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IEventFailureReason);

            /** EventFailureReason alreadyInTerminalState. */
            public alreadyInTerminalState?: (flyteidl.admin.IEventErrorAlreadyInTerminalState|null);

            /** EventFailureReason reason. */
            public reason?: "alreadyInTerminalState";

            /**
             * Creates a new EventFailureReason instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EventFailureReason instance
             */
            public static create(properties?: flyteidl.admin.IEventFailureReason): flyteidl.admin.EventFailureReason;

            /**
             * Encodes the specified EventFailureReason message. Does not implicitly {@link flyteidl.admin.EventFailureReason.verify|verify} messages.
             * @param message EventFailureReason message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IEventFailureReason, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EventFailureReason message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EventFailureReason
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.EventFailureReason;

            /**
             * Verifies an EventFailureReason message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowExecutionEventRequest. */
        interface IWorkflowExecutionEventRequest {

            /** WorkflowExecutionEventRequest requestId */
            requestId?: (string|null);

            /** WorkflowExecutionEventRequest event */
            event?: (flyteidl.event.IWorkflowExecutionEvent|null);
        }

        /** Represents a WorkflowExecutionEventRequest. */
        class WorkflowExecutionEventRequest implements IWorkflowExecutionEventRequest {

            /**
             * Constructs a new WorkflowExecutionEventRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowExecutionEventRequest);

            /** WorkflowExecutionEventRequest requestId. */
            public requestId: string;

            /** WorkflowExecutionEventRequest event. */
            public event?: (flyteidl.event.IWorkflowExecutionEvent|null);

            /**
             * Creates a new WorkflowExecutionEventRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecutionEventRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowExecutionEventRequest): flyteidl.admin.WorkflowExecutionEventRequest;

            /**
             * Encodes the specified WorkflowExecutionEventRequest message. Does not implicitly {@link flyteidl.admin.WorkflowExecutionEventRequest.verify|verify} messages.
             * @param message WorkflowExecutionEventRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowExecutionEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecutionEventRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecutionEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowExecutionEventRequest;

            /**
             * Verifies a WorkflowExecutionEventRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowExecutionEventResponse. */
        interface IWorkflowExecutionEventResponse {
        }

        /** Represents a WorkflowExecutionEventResponse. */
        class WorkflowExecutionEventResponse implements IWorkflowExecutionEventResponse {

            /**
             * Constructs a new WorkflowExecutionEventResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowExecutionEventResponse);

            /**
             * Creates a new WorkflowExecutionEventResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecutionEventResponse instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowExecutionEventResponse): flyteidl.admin.WorkflowExecutionEventResponse;

            /**
             * Encodes the specified WorkflowExecutionEventResponse message. Does not implicitly {@link flyteidl.admin.WorkflowExecutionEventResponse.verify|verify} messages.
             * @param message WorkflowExecutionEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowExecutionEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecutionEventResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecutionEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowExecutionEventResponse;

            /**
             * Verifies a WorkflowExecutionEventResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionEventRequest. */
        interface INodeExecutionEventRequest {

            /** NodeExecutionEventRequest requestId */
            requestId?: (string|null);

            /** NodeExecutionEventRequest event */
            event?: (flyteidl.event.INodeExecutionEvent|null);
        }

        /** Represents a NodeExecutionEventRequest. */
        class NodeExecutionEventRequest implements INodeExecutionEventRequest {

            /**
             * Constructs a new NodeExecutionEventRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionEventRequest);

            /** NodeExecutionEventRequest requestId. */
            public requestId: string;

            /** NodeExecutionEventRequest event. */
            public event?: (flyteidl.event.INodeExecutionEvent|null);

            /**
             * Creates a new NodeExecutionEventRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionEventRequest instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionEventRequest): flyteidl.admin.NodeExecutionEventRequest;

            /**
             * Encodes the specified NodeExecutionEventRequest message. Does not implicitly {@link flyteidl.admin.NodeExecutionEventRequest.verify|verify} messages.
             * @param message NodeExecutionEventRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionEventRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionEventRequest;

            /**
             * Verifies a NodeExecutionEventRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionEventResponse. */
        interface INodeExecutionEventResponse {
        }

        /** Represents a NodeExecutionEventResponse. */
        class NodeExecutionEventResponse implements INodeExecutionEventResponse {

            /**
             * Constructs a new NodeExecutionEventResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionEventResponse);

            /**
             * Creates a new NodeExecutionEventResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionEventResponse instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionEventResponse): flyteidl.admin.NodeExecutionEventResponse;

            /**
             * Encodes the specified NodeExecutionEventResponse message. Does not implicitly {@link flyteidl.admin.NodeExecutionEventResponse.verify|verify} messages.
             * @param message NodeExecutionEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionEventResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionEventResponse;

            /**
             * Verifies a NodeExecutionEventResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionEventRequest. */
        interface ITaskExecutionEventRequest {

            /** TaskExecutionEventRequest requestId */
            requestId?: (string|null);

            /** TaskExecutionEventRequest event */
            event?: (flyteidl.event.ITaskExecutionEvent|null);
        }

        /** Represents a TaskExecutionEventRequest. */
        class TaskExecutionEventRequest implements ITaskExecutionEventRequest {

            /**
             * Constructs a new TaskExecutionEventRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionEventRequest);

            /** TaskExecutionEventRequest requestId. */
            public requestId: string;

            /** TaskExecutionEventRequest event. */
            public event?: (flyteidl.event.ITaskExecutionEvent|null);

            /**
             * Creates a new TaskExecutionEventRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionEventRequest instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionEventRequest): flyteidl.admin.TaskExecutionEventRequest;

            /**
             * Encodes the specified TaskExecutionEventRequest message. Does not implicitly {@link flyteidl.admin.TaskExecutionEventRequest.verify|verify} messages.
             * @param message TaskExecutionEventRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionEventRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionEventRequest;

            /**
             * Verifies a TaskExecutionEventRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionEventResponse. */
        interface ITaskExecutionEventResponse {
        }

        /** Represents a TaskExecutionEventResponse. */
        class TaskExecutionEventResponse implements ITaskExecutionEventResponse {

            /**
             * Constructs a new TaskExecutionEventResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionEventResponse);

            /**
             * Creates a new TaskExecutionEventResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionEventResponse instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionEventResponse): flyteidl.admin.TaskExecutionEventResponse;

            /**
             * Encodes the specified TaskExecutionEventResponse message. Does not implicitly {@link flyteidl.admin.TaskExecutionEventResponse.verify|verify} messages.
             * @param message TaskExecutionEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionEventResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionEventResponse;

            /**
             * Verifies a TaskExecutionEventResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionCreateRequest. */
        interface IExecutionCreateRequest {

            /** ExecutionCreateRequest project */
            project?: (string|null);

            /** ExecutionCreateRequest domain */
            domain?: (string|null);

            /** ExecutionCreateRequest name */
            name?: (string|null);

            /** ExecutionCreateRequest spec */
            spec?: (flyteidl.admin.IExecutionSpec|null);

            /** ExecutionCreateRequest inputs */
            inputs?: (flyteidl.core.ILiteralMap|null);
        }

        /** Represents an ExecutionCreateRequest. */
        class ExecutionCreateRequest implements IExecutionCreateRequest {

            /**
             * Constructs a new ExecutionCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionCreateRequest);

            /** ExecutionCreateRequest project. */
            public project: string;

            /** ExecutionCreateRequest domain. */
            public domain: string;

            /** ExecutionCreateRequest name. */
            public name: string;

            /** ExecutionCreateRequest spec. */
            public spec?: (flyteidl.admin.IExecutionSpec|null);

            /** ExecutionCreateRequest inputs. */
            public inputs?: (flyteidl.core.ILiteralMap|null);

            /**
             * Creates a new ExecutionCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.IExecutionCreateRequest): flyteidl.admin.ExecutionCreateRequest;

            /**
             * Encodes the specified ExecutionCreateRequest message. Does not implicitly {@link flyteidl.admin.ExecutionCreateRequest.verify|verify} messages.
             * @param message ExecutionCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionCreateRequest;

            /**
             * Verifies an ExecutionCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionRelaunchRequest. */
        interface IExecutionRelaunchRequest {

            /** ExecutionRelaunchRequest id */
            id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** ExecutionRelaunchRequest name */
            name?: (string|null);
        }

        /** Represents an ExecutionRelaunchRequest. */
        class ExecutionRelaunchRequest implements IExecutionRelaunchRequest {

            /**
             * Constructs a new ExecutionRelaunchRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionRelaunchRequest);

            /** ExecutionRelaunchRequest id. */
            public id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** ExecutionRelaunchRequest name. */
            public name: string;

            /**
             * Creates a new ExecutionRelaunchRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionRelaunchRequest instance
             */
            public static create(properties?: flyteidl.admin.IExecutionRelaunchRequest): flyteidl.admin.ExecutionRelaunchRequest;

            /**
             * Encodes the specified ExecutionRelaunchRequest message. Does not implicitly {@link flyteidl.admin.ExecutionRelaunchRequest.verify|verify} messages.
             * @param message ExecutionRelaunchRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionRelaunchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionRelaunchRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionRelaunchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionRelaunchRequest;

            /**
             * Verifies an ExecutionRelaunchRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionCreateResponse. */
        interface IExecutionCreateResponse {

            /** ExecutionCreateResponse id */
            id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);
        }

        /** Represents an ExecutionCreateResponse. */
        class ExecutionCreateResponse implements IExecutionCreateResponse {

            /**
             * Constructs a new ExecutionCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionCreateResponse);

            /** ExecutionCreateResponse id. */
            public id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /**
             * Creates a new ExecutionCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.IExecutionCreateResponse): flyteidl.admin.ExecutionCreateResponse;

            /**
             * Encodes the specified ExecutionCreateResponse message. Does not implicitly {@link flyteidl.admin.ExecutionCreateResponse.verify|verify} messages.
             * @param message ExecutionCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionCreateResponse;

            /**
             * Verifies an ExecutionCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowExecutionGetRequest. */
        interface IWorkflowExecutionGetRequest {

            /** WorkflowExecutionGetRequest id */
            id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);
        }

        /** Represents a WorkflowExecutionGetRequest. */
        class WorkflowExecutionGetRequest implements IWorkflowExecutionGetRequest {

            /**
             * Constructs a new WorkflowExecutionGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowExecutionGetRequest);

            /** WorkflowExecutionGetRequest id. */
            public id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /**
             * Creates a new WorkflowExecutionGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecutionGetRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowExecutionGetRequest): flyteidl.admin.WorkflowExecutionGetRequest;

            /**
             * Encodes the specified WorkflowExecutionGetRequest message. Does not implicitly {@link flyteidl.admin.WorkflowExecutionGetRequest.verify|verify} messages.
             * @param message WorkflowExecutionGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowExecutionGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecutionGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecutionGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowExecutionGetRequest;

            /**
             * Verifies a WorkflowExecutionGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Execution. */
        interface IExecution {

            /** Execution id */
            id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** Execution spec */
            spec?: (flyteidl.admin.IExecutionSpec|null);

            /** Execution closure */
            closure?: (flyteidl.admin.IExecutionClosure|null);
        }

        /** Represents an Execution. */
        class Execution implements IExecution {

            /**
             * Constructs a new Execution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecution);

            /** Execution id. */
            public id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** Execution spec. */
            public spec?: (flyteidl.admin.IExecutionSpec|null);

            /** Execution closure. */
            public closure?: (flyteidl.admin.IExecutionClosure|null);

            /**
             * Creates a new Execution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Execution instance
             */
            public static create(properties?: flyteidl.admin.IExecution): flyteidl.admin.Execution;

            /**
             * Encodes the specified Execution message. Does not implicitly {@link flyteidl.admin.Execution.verify|verify} messages.
             * @param message Execution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Execution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Execution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Execution;

            /**
             * Verifies an Execution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionList. */
        interface IExecutionList {

            /** ExecutionList executions */
            executions?: (flyteidl.admin.IExecution[]|null);

            /** ExecutionList token */
            token?: (string|null);
        }

        /** Represents an ExecutionList. */
        class ExecutionList implements IExecutionList {

            /**
             * Constructs a new ExecutionList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionList);

            /** ExecutionList executions. */
            public executions: flyteidl.admin.IExecution[];

            /** ExecutionList token. */
            public token: string;

            /**
             * Creates a new ExecutionList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionList instance
             */
            public static create(properties?: flyteidl.admin.IExecutionList): flyteidl.admin.ExecutionList;

            /**
             * Encodes the specified ExecutionList message. Does not implicitly {@link flyteidl.admin.ExecutionList.verify|verify} messages.
             * @param message ExecutionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionList;

            /**
             * Verifies an ExecutionList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LiteralMapBlob. */
        interface ILiteralMapBlob {

            /** LiteralMapBlob values */
            values?: (flyteidl.core.ILiteralMap|null);

            /** LiteralMapBlob uri */
            uri?: (string|null);
        }

        /** Represents a LiteralMapBlob. */
        class LiteralMapBlob implements ILiteralMapBlob {

            /**
             * Constructs a new LiteralMapBlob.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILiteralMapBlob);

            /** LiteralMapBlob values. */
            public values?: (flyteidl.core.ILiteralMap|null);

            /** LiteralMapBlob uri. */
            public uri: string;

            /** LiteralMapBlob data. */
            public data?: ("values"|"uri");

            /**
             * Creates a new LiteralMapBlob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralMapBlob instance
             */
            public static create(properties?: flyteidl.admin.ILiteralMapBlob): flyteidl.admin.LiteralMapBlob;

            /**
             * Encodes the specified LiteralMapBlob message. Does not implicitly {@link flyteidl.admin.LiteralMapBlob.verify|verify} messages.
             * @param message LiteralMapBlob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILiteralMapBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralMapBlob message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralMapBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LiteralMapBlob;

            /**
             * Verifies a LiteralMapBlob message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an AbortMetadata. */
        interface IAbortMetadata {

            /** AbortMetadata cause */
            cause?: (string|null);

            /** AbortMetadata principal */
            principal?: (string|null);
        }

        /** Represents an AbortMetadata. */
        class AbortMetadata implements IAbortMetadata {

            /**
             * Constructs a new AbortMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IAbortMetadata);

            /** AbortMetadata cause. */
            public cause: string;

            /** AbortMetadata principal. */
            public principal: string;

            /**
             * Creates a new AbortMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AbortMetadata instance
             */
            public static create(properties?: flyteidl.admin.IAbortMetadata): flyteidl.admin.AbortMetadata;

            /**
             * Encodes the specified AbortMetadata message. Does not implicitly {@link flyteidl.admin.AbortMetadata.verify|verify} messages.
             * @param message AbortMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IAbortMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AbortMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AbortMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.AbortMetadata;

            /**
             * Verifies an AbortMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionClosure. */
        interface IExecutionClosure {

            /** ExecutionClosure outputs */
            outputs?: (flyteidl.admin.ILiteralMapBlob|null);

            /** ExecutionClosure error */
            error?: (flyteidl.core.IExecutionError|null);

            /** ExecutionClosure abortCause */
            abortCause?: (string|null);

            /** ExecutionClosure abortMetadata */
            abortMetadata?: (flyteidl.admin.IAbortMetadata|null);

            /** ExecutionClosure computedInputs */
            computedInputs?: (flyteidl.core.ILiteralMap|null);

            /** ExecutionClosure phase */
            phase?: (flyteidl.core.WorkflowExecution.Phase|null);

            /** ExecutionClosure startedAt */
            startedAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionClosure duration */
            duration?: (google.protobuf.IDuration|null);

            /** ExecutionClosure createdAt */
            createdAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionClosure updatedAt */
            updatedAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionClosure notifications */
            notifications?: (flyteidl.admin.INotification[]|null);

            /** ExecutionClosure workflowId */
            workflowId?: (flyteidl.core.IIdentifier|null);
        }

        /** Represents an ExecutionClosure. */
        class ExecutionClosure implements IExecutionClosure {

            /**
             * Constructs a new ExecutionClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionClosure);

            /** ExecutionClosure outputs. */
            public outputs?: (flyteidl.admin.ILiteralMapBlob|null);

            /** ExecutionClosure error. */
            public error?: (flyteidl.core.IExecutionError|null);

            /** ExecutionClosure abortCause. */
            public abortCause: string;

            /** ExecutionClosure abortMetadata. */
            public abortMetadata?: (flyteidl.admin.IAbortMetadata|null);

            /** ExecutionClosure computedInputs. */
            public computedInputs?: (flyteidl.core.ILiteralMap|null);

            /** ExecutionClosure phase. */
            public phase: flyteidl.core.WorkflowExecution.Phase;

            /** ExecutionClosure startedAt. */
            public startedAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionClosure duration. */
            public duration?: (google.protobuf.IDuration|null);

            /** ExecutionClosure createdAt. */
            public createdAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionClosure updatedAt. */
            public updatedAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionClosure notifications. */
            public notifications: flyteidl.admin.INotification[];

            /** ExecutionClosure workflowId. */
            public workflowId?: (flyteidl.core.IIdentifier|null);

            /** ExecutionClosure outputResult. */
            public outputResult?: ("outputs"|"error"|"abortCause"|"abortMetadata");

            /**
             * Creates a new ExecutionClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionClosure instance
             */
            public static create(properties?: flyteidl.admin.IExecutionClosure): flyteidl.admin.ExecutionClosure;

            /**
             * Encodes the specified ExecutionClosure message. Does not implicitly {@link flyteidl.admin.ExecutionClosure.verify|verify} messages.
             * @param message ExecutionClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionClosure;

            /**
             * Verifies an ExecutionClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a SystemMetadata. */
        interface ISystemMetadata {

            /** SystemMetadata executionCluster */
            executionCluster?: (string|null);
        }

        /** Represents a SystemMetadata. */
        class SystemMetadata implements ISystemMetadata {

            /**
             * Constructs a new SystemMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ISystemMetadata);

            /** SystemMetadata executionCluster. */
            public executionCluster: string;

            /**
             * Creates a new SystemMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemMetadata instance
             */
            public static create(properties?: flyteidl.admin.ISystemMetadata): flyteidl.admin.SystemMetadata;

            /**
             * Encodes the specified SystemMetadata message. Does not implicitly {@link flyteidl.admin.SystemMetadata.verify|verify} messages.
             * @param message SystemMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ISystemMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.SystemMetadata;

            /**
             * Verifies a SystemMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionMetadata. */
        interface IExecutionMetadata {

            /** ExecutionMetadata mode */
            mode?: (flyteidl.admin.ExecutionMetadata.ExecutionMode|null);

            /** ExecutionMetadata principal */
            principal?: (string|null);

            /** ExecutionMetadata nesting */
            nesting?: (number|null);

            /** ExecutionMetadata scheduledAt */
            scheduledAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionMetadata parentNodeExecution */
            parentNodeExecution?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** ExecutionMetadata referenceExecution */
            referenceExecution?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** ExecutionMetadata systemMetadata */
            systemMetadata?: (flyteidl.admin.ISystemMetadata|null);
        }

        /** Represents an ExecutionMetadata. */
        class ExecutionMetadata implements IExecutionMetadata {

            /**
             * Constructs a new ExecutionMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionMetadata);

            /** ExecutionMetadata mode. */
            public mode: flyteidl.admin.ExecutionMetadata.ExecutionMode;

            /** ExecutionMetadata principal. */
            public principal: string;

            /** ExecutionMetadata nesting. */
            public nesting: number;

            /** ExecutionMetadata scheduledAt. */
            public scheduledAt?: (google.protobuf.ITimestamp|null);

            /** ExecutionMetadata parentNodeExecution. */
            public parentNodeExecution?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** ExecutionMetadata referenceExecution. */
            public referenceExecution?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** ExecutionMetadata systemMetadata. */
            public systemMetadata?: (flyteidl.admin.ISystemMetadata|null);

            /**
             * Creates a new ExecutionMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionMetadata instance
             */
            public static create(properties?: flyteidl.admin.IExecutionMetadata): flyteidl.admin.ExecutionMetadata;

            /**
             * Encodes the specified ExecutionMetadata message. Does not implicitly {@link flyteidl.admin.ExecutionMetadata.verify|verify} messages.
             * @param message ExecutionMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionMetadata;

            /**
             * Verifies an ExecutionMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ExecutionMetadata {

            /** ExecutionMode enum. */
            enum ExecutionMode {
                MANUAL = 0,
                SCHEDULED = 1,
                SYSTEM = 2,
                RELAUNCH = 3,
                CHILD_WORKFLOW = 4
            }
        }

        /** Properties of a NotificationList. */
        interface INotificationList {

            /** NotificationList notifications */
            notifications?: (flyteidl.admin.INotification[]|null);
        }

        /** Represents a NotificationList. */
        class NotificationList implements INotificationList {

            /**
             * Constructs a new NotificationList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INotificationList);

            /** NotificationList notifications. */
            public notifications: flyteidl.admin.INotification[];

            /**
             * Creates a new NotificationList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotificationList instance
             */
            public static create(properties?: flyteidl.admin.INotificationList): flyteidl.admin.NotificationList;

            /**
             * Encodes the specified NotificationList message. Does not implicitly {@link flyteidl.admin.NotificationList.verify|verify} messages.
             * @param message NotificationList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INotificationList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotificationList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotificationList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NotificationList;

            /**
             * Verifies a NotificationList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionSpec. */
        interface IExecutionSpec {

            /** ExecutionSpec launchPlan */
            launchPlan?: (flyteidl.core.IIdentifier|null);

            /** ExecutionSpec inputs */
            inputs?: (flyteidl.core.ILiteralMap|null);

            /** ExecutionSpec metadata */
            metadata?: (flyteidl.admin.IExecutionMetadata|null);

            /** ExecutionSpec notifications */
            notifications?: (flyteidl.admin.INotificationList|null);

            /** ExecutionSpec disableAll */
            disableAll?: (boolean|null);

            /** ExecutionSpec labels */
            labels?: (flyteidl.admin.ILabels|null);

            /** ExecutionSpec annotations */
            annotations?: (flyteidl.admin.IAnnotations|null);

            /** ExecutionSpec authRole */
            authRole?: (flyteidl.admin.IAuthRole|null);
        }

        /** Represents an ExecutionSpec. */
        class ExecutionSpec implements IExecutionSpec {

            /**
             * Constructs a new ExecutionSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionSpec);

            /** ExecutionSpec launchPlan. */
            public launchPlan?: (flyteidl.core.IIdentifier|null);

            /** ExecutionSpec inputs. */
            public inputs?: (flyteidl.core.ILiteralMap|null);

            /** ExecutionSpec metadata. */
            public metadata?: (flyteidl.admin.IExecutionMetadata|null);

            /** ExecutionSpec notifications. */
            public notifications?: (flyteidl.admin.INotificationList|null);

            /** ExecutionSpec disableAll. */
            public disableAll: boolean;

            /** ExecutionSpec labels. */
            public labels?: (flyteidl.admin.ILabels|null);

            /** ExecutionSpec annotations. */
            public annotations?: (flyteidl.admin.IAnnotations|null);

            /** ExecutionSpec authRole. */
            public authRole?: (flyteidl.admin.IAuthRole|null);

            /** ExecutionSpec notificationOverrides. */
            public notificationOverrides?: ("notifications"|"disableAll");

            /**
             * Creates a new ExecutionSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionSpec instance
             */
            public static create(properties?: flyteidl.admin.IExecutionSpec): flyteidl.admin.ExecutionSpec;

            /**
             * Encodes the specified ExecutionSpec message. Does not implicitly {@link flyteidl.admin.ExecutionSpec.verify|verify} messages.
             * @param message ExecutionSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionSpec;

            /**
             * Verifies an ExecutionSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionTerminateRequest. */
        interface IExecutionTerminateRequest {

            /** ExecutionTerminateRequest id */
            id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** ExecutionTerminateRequest cause */
            cause?: (string|null);
        }

        /** Represents an ExecutionTerminateRequest. */
        class ExecutionTerminateRequest implements IExecutionTerminateRequest {

            /**
             * Constructs a new ExecutionTerminateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionTerminateRequest);

            /** ExecutionTerminateRequest id. */
            public id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** ExecutionTerminateRequest cause. */
            public cause: string;

            /**
             * Creates a new ExecutionTerminateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionTerminateRequest instance
             */
            public static create(properties?: flyteidl.admin.IExecutionTerminateRequest): flyteidl.admin.ExecutionTerminateRequest;

            /**
             * Encodes the specified ExecutionTerminateRequest message. Does not implicitly {@link flyteidl.admin.ExecutionTerminateRequest.verify|verify} messages.
             * @param message ExecutionTerminateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionTerminateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionTerminateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionTerminateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionTerminateRequest;

            /**
             * Verifies an ExecutionTerminateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionTerminateResponse. */
        interface IExecutionTerminateResponse {
        }

        /** Represents an ExecutionTerminateResponse. */
        class ExecutionTerminateResponse implements IExecutionTerminateResponse {

            /**
             * Constructs a new ExecutionTerminateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionTerminateResponse);

            /**
             * Creates a new ExecutionTerminateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionTerminateResponse instance
             */
            public static create(properties?: flyteidl.admin.IExecutionTerminateResponse): flyteidl.admin.ExecutionTerminateResponse;

            /**
             * Encodes the specified ExecutionTerminateResponse message. Does not implicitly {@link flyteidl.admin.ExecutionTerminateResponse.verify|verify} messages.
             * @param message ExecutionTerminateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionTerminateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionTerminateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionTerminateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionTerminateResponse;

            /**
             * Verifies an ExecutionTerminateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowExecutionGetDataRequest. */
        interface IWorkflowExecutionGetDataRequest {

            /** WorkflowExecutionGetDataRequest id */
            id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);
        }

        /** Represents a WorkflowExecutionGetDataRequest. */
        class WorkflowExecutionGetDataRequest implements IWorkflowExecutionGetDataRequest {

            /**
             * Constructs a new WorkflowExecutionGetDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowExecutionGetDataRequest);

            /** WorkflowExecutionGetDataRequest id. */
            public id?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /**
             * Creates a new WorkflowExecutionGetDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecutionGetDataRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowExecutionGetDataRequest): flyteidl.admin.WorkflowExecutionGetDataRequest;

            /**
             * Encodes the specified WorkflowExecutionGetDataRequest message. Does not implicitly {@link flyteidl.admin.WorkflowExecutionGetDataRequest.verify|verify} messages.
             * @param message WorkflowExecutionGetDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowExecutionGetDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecutionGetDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecutionGetDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowExecutionGetDataRequest;

            /**
             * Verifies a WorkflowExecutionGetDataRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowExecutionGetDataResponse. */
        interface IWorkflowExecutionGetDataResponse {

            /** WorkflowExecutionGetDataResponse outputs */
            outputs?: (flyteidl.admin.IUrlBlob|null);

            /** WorkflowExecutionGetDataResponse inputs */
            inputs?: (flyteidl.admin.IUrlBlob|null);
        }

        /** Represents a WorkflowExecutionGetDataResponse. */
        class WorkflowExecutionGetDataResponse implements IWorkflowExecutionGetDataResponse {

            /**
             * Constructs a new WorkflowExecutionGetDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowExecutionGetDataResponse);

            /** WorkflowExecutionGetDataResponse outputs. */
            public outputs?: (flyteidl.admin.IUrlBlob|null);

            /** WorkflowExecutionGetDataResponse inputs. */
            public inputs?: (flyteidl.admin.IUrlBlob|null);

            /**
             * Creates a new WorkflowExecutionGetDataResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowExecutionGetDataResponse instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowExecutionGetDataResponse): flyteidl.admin.WorkflowExecutionGetDataResponse;

            /**
             * Encodes the specified WorkflowExecutionGetDataResponse message. Does not implicitly {@link flyteidl.admin.WorkflowExecutionGetDataResponse.verify|verify} messages.
             * @param message WorkflowExecutionGetDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowExecutionGetDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowExecutionGetDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowExecutionGetDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowExecutionGetDataResponse;

            /**
             * Verifies a WorkflowExecutionGetDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanCreateRequest. */
        interface ILaunchPlanCreateRequest {

            /** LaunchPlanCreateRequest id */
            id?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlanCreateRequest spec */
            spec?: (flyteidl.admin.ILaunchPlanSpec|null);
        }

        /** Represents a LaunchPlanCreateRequest. */
        class LaunchPlanCreateRequest implements ILaunchPlanCreateRequest {

            /**
             * Constructs a new LaunchPlanCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanCreateRequest);

            /** LaunchPlanCreateRequest id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlanCreateRequest spec. */
            public spec?: (flyteidl.admin.ILaunchPlanSpec|null);

            /**
             * Creates a new LaunchPlanCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanCreateRequest): flyteidl.admin.LaunchPlanCreateRequest;

            /**
             * Encodes the specified LaunchPlanCreateRequest message. Does not implicitly {@link flyteidl.admin.LaunchPlanCreateRequest.verify|verify} messages.
             * @param message LaunchPlanCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanCreateRequest;

            /**
             * Verifies a LaunchPlanCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanCreateResponse. */
        interface ILaunchPlanCreateResponse {
        }

        /** Represents a LaunchPlanCreateResponse. */
        class LaunchPlanCreateResponse implements ILaunchPlanCreateResponse {

            /**
             * Constructs a new LaunchPlanCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanCreateResponse);

            /**
             * Creates a new LaunchPlanCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanCreateResponse): flyteidl.admin.LaunchPlanCreateResponse;

            /**
             * Encodes the specified LaunchPlanCreateResponse message. Does not implicitly {@link flyteidl.admin.LaunchPlanCreateResponse.verify|verify} messages.
             * @param message LaunchPlanCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanCreateResponse;

            /**
             * Verifies a LaunchPlanCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** LaunchPlanState enum. */
        enum LaunchPlanState {
            INACTIVE = 0,
            ACTIVE = 1
        }

        /** Properties of a LaunchPlan. */
        interface ILaunchPlan {

            /** LaunchPlan id */
            id?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlan spec */
            spec?: (flyteidl.admin.ILaunchPlanSpec|null);

            /** LaunchPlan closure */
            closure?: (flyteidl.admin.ILaunchPlanClosure|null);
        }

        /** Represents a LaunchPlan. */
        class LaunchPlan implements ILaunchPlan {

            /**
             * Constructs a new LaunchPlan.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlan);

            /** LaunchPlan id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlan spec. */
            public spec?: (flyteidl.admin.ILaunchPlanSpec|null);

            /** LaunchPlan closure. */
            public closure?: (flyteidl.admin.ILaunchPlanClosure|null);

            /**
             * Creates a new LaunchPlan instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlan instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlan): flyteidl.admin.LaunchPlan;

            /**
             * Encodes the specified LaunchPlan message. Does not implicitly {@link flyteidl.admin.LaunchPlan.verify|verify} messages.
             * @param message LaunchPlan message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlan, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlan message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlan
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlan;

            /**
             * Verifies a LaunchPlan message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanList. */
        interface ILaunchPlanList {

            /** LaunchPlanList launchPlans */
            launchPlans?: (flyteidl.admin.ILaunchPlan[]|null);

            /** LaunchPlanList token */
            token?: (string|null);
        }

        /** Represents a LaunchPlanList. */
        class LaunchPlanList implements ILaunchPlanList {

            /**
             * Constructs a new LaunchPlanList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanList);

            /** LaunchPlanList launchPlans. */
            public launchPlans: flyteidl.admin.ILaunchPlan[];

            /** LaunchPlanList token. */
            public token: string;

            /**
             * Creates a new LaunchPlanList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanList instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanList): flyteidl.admin.LaunchPlanList;

            /**
             * Encodes the specified LaunchPlanList message. Does not implicitly {@link flyteidl.admin.LaunchPlanList.verify|verify} messages.
             * @param message LaunchPlanList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanList;

            /**
             * Verifies a LaunchPlanList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Auth. */
        interface IAuth {

            /** Auth assumableIamRole */
            assumableIamRole?: (string|null);

            /** Auth kubernetesServiceAccount */
            kubernetesServiceAccount?: (string|null);
        }

        /** Represents an Auth. */
        class Auth implements IAuth {

            /**
             * Constructs a new Auth.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IAuth);

            /** Auth assumableIamRole. */
            public assumableIamRole: string;

            /** Auth kubernetesServiceAccount. */
            public kubernetesServiceAccount: string;

            /** Auth method. */
            public method?: ("assumableIamRole"|"kubernetesServiceAccount");

            /**
             * Creates a new Auth instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Auth instance
             */
            public static create(properties?: flyteidl.admin.IAuth): flyteidl.admin.Auth;

            /**
             * Encodes the specified Auth message. Does not implicitly {@link flyteidl.admin.Auth.verify|verify} messages.
             * @param message Auth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Auth message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Auth;

            /**
             * Verifies an Auth message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanSpec. */
        interface ILaunchPlanSpec {

            /** LaunchPlanSpec workflowId */
            workflowId?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlanSpec entityMetadata */
            entityMetadata?: (flyteidl.admin.ILaunchPlanMetadata|null);

            /** LaunchPlanSpec defaultInputs */
            defaultInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanSpec fixedInputs */
            fixedInputs?: (flyteidl.core.ILiteralMap|null);

            /** LaunchPlanSpec role */
            role?: (string|null);

            /** LaunchPlanSpec labels */
            labels?: (flyteidl.admin.ILabels|null);

            /** LaunchPlanSpec annotations */
            annotations?: (flyteidl.admin.IAnnotations|null);

            /** LaunchPlanSpec auth */
            auth?: (flyteidl.admin.IAuth|null);

            /** LaunchPlanSpec authRole */
            authRole?: (flyteidl.admin.IAuthRole|null);
        }

        /** Represents a LaunchPlanSpec. */
        class LaunchPlanSpec implements ILaunchPlanSpec {

            /**
             * Constructs a new LaunchPlanSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanSpec);

            /** LaunchPlanSpec workflowId. */
            public workflowId?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlanSpec entityMetadata. */
            public entityMetadata?: (flyteidl.admin.ILaunchPlanMetadata|null);

            /** LaunchPlanSpec defaultInputs. */
            public defaultInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanSpec fixedInputs. */
            public fixedInputs?: (flyteidl.core.ILiteralMap|null);

            /** LaunchPlanSpec role. */
            public role: string;

            /** LaunchPlanSpec labels. */
            public labels?: (flyteidl.admin.ILabels|null);

            /** LaunchPlanSpec annotations. */
            public annotations?: (flyteidl.admin.IAnnotations|null);

            /** LaunchPlanSpec auth. */
            public auth?: (flyteidl.admin.IAuth|null);

            /** LaunchPlanSpec authRole. */
            public authRole?: (flyteidl.admin.IAuthRole|null);

            /**
             * Creates a new LaunchPlanSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanSpec instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanSpec): flyteidl.admin.LaunchPlanSpec;

            /**
             * Encodes the specified LaunchPlanSpec message. Does not implicitly {@link flyteidl.admin.LaunchPlanSpec.verify|verify} messages.
             * @param message LaunchPlanSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanSpec;

            /**
             * Verifies a LaunchPlanSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanClosure. */
        interface ILaunchPlanClosure {

            /** LaunchPlanClosure state */
            state?: (flyteidl.admin.LaunchPlanState|null);

            /** LaunchPlanClosure expectedInputs */
            expectedInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanClosure expectedOutputs */
            expectedOutputs?: (flyteidl.core.IVariableMap|null);

            /** LaunchPlanClosure createdAt */
            createdAt?: (google.protobuf.ITimestamp|null);

            /** LaunchPlanClosure updatedAt */
            updatedAt?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a LaunchPlanClosure. */
        class LaunchPlanClosure implements ILaunchPlanClosure {

            /**
             * Constructs a new LaunchPlanClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanClosure);

            /** LaunchPlanClosure state. */
            public state: flyteidl.admin.LaunchPlanState;

            /** LaunchPlanClosure expectedInputs. */
            public expectedInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanClosure expectedOutputs. */
            public expectedOutputs?: (flyteidl.core.IVariableMap|null);

            /** LaunchPlanClosure createdAt. */
            public createdAt?: (google.protobuf.ITimestamp|null);

            /** LaunchPlanClosure updatedAt. */
            public updatedAt?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new LaunchPlanClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanClosure instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanClosure): flyteidl.admin.LaunchPlanClosure;

            /**
             * Encodes the specified LaunchPlanClosure message. Does not implicitly {@link flyteidl.admin.LaunchPlanClosure.verify|verify} messages.
             * @param message LaunchPlanClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanClosure;

            /**
             * Verifies a LaunchPlanClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanMetadata. */
        interface ILaunchPlanMetadata {

            /** LaunchPlanMetadata schedule */
            schedule?: (flyteidl.admin.ISchedule|null);

            /** LaunchPlanMetadata notifications */
            notifications?: (flyteidl.admin.INotification[]|null);
        }

        /** Represents a LaunchPlanMetadata. */
        class LaunchPlanMetadata implements ILaunchPlanMetadata {

            /**
             * Constructs a new LaunchPlanMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanMetadata);

            /** LaunchPlanMetadata schedule. */
            public schedule?: (flyteidl.admin.ISchedule|null);

            /** LaunchPlanMetadata notifications. */
            public notifications: flyteidl.admin.INotification[];

            /**
             * Creates a new LaunchPlanMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanMetadata instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanMetadata): flyteidl.admin.LaunchPlanMetadata;

            /**
             * Encodes the specified LaunchPlanMetadata message. Does not implicitly {@link flyteidl.admin.LaunchPlanMetadata.verify|verify} messages.
             * @param message LaunchPlanMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanMetadata;

            /**
             * Verifies a LaunchPlanMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanUpdateRequest. */
        interface ILaunchPlanUpdateRequest {

            /** LaunchPlanUpdateRequest id */
            id?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlanUpdateRequest state */
            state?: (flyteidl.admin.LaunchPlanState|null);
        }

        /** Represents a LaunchPlanUpdateRequest. */
        class LaunchPlanUpdateRequest implements ILaunchPlanUpdateRequest {

            /**
             * Constructs a new LaunchPlanUpdateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanUpdateRequest);

            /** LaunchPlanUpdateRequest id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** LaunchPlanUpdateRequest state. */
            public state: flyteidl.admin.LaunchPlanState;

            /**
             * Creates a new LaunchPlanUpdateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanUpdateRequest instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanUpdateRequest): flyteidl.admin.LaunchPlanUpdateRequest;

            /**
             * Encodes the specified LaunchPlanUpdateRequest message. Does not implicitly {@link flyteidl.admin.LaunchPlanUpdateRequest.verify|verify} messages.
             * @param message LaunchPlanUpdateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanUpdateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanUpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanUpdateRequest;

            /**
             * Verifies a LaunchPlanUpdateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanUpdateResponse. */
        interface ILaunchPlanUpdateResponse {
        }

        /** Represents a LaunchPlanUpdateResponse. */
        class LaunchPlanUpdateResponse implements ILaunchPlanUpdateResponse {

            /**
             * Constructs a new LaunchPlanUpdateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanUpdateResponse);

            /**
             * Creates a new LaunchPlanUpdateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanUpdateResponse instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanUpdateResponse): flyteidl.admin.LaunchPlanUpdateResponse;

            /**
             * Encodes the specified LaunchPlanUpdateResponse message. Does not implicitly {@link flyteidl.admin.LaunchPlanUpdateResponse.verify|verify} messages.
             * @param message LaunchPlanUpdateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanUpdateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanUpdateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanUpdateResponse;

            /**
             * Verifies a LaunchPlanUpdateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ActiveLaunchPlanRequest. */
        interface IActiveLaunchPlanRequest {

            /** ActiveLaunchPlanRequest id */
            id?: (flyteidl.admin.INamedEntityIdentifier|null);
        }

        /** Represents an ActiveLaunchPlanRequest. */
        class ActiveLaunchPlanRequest implements IActiveLaunchPlanRequest {

            /**
             * Constructs a new ActiveLaunchPlanRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IActiveLaunchPlanRequest);

            /** ActiveLaunchPlanRequest id. */
            public id?: (flyteidl.admin.INamedEntityIdentifier|null);

            /**
             * Creates a new ActiveLaunchPlanRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveLaunchPlanRequest instance
             */
            public static create(properties?: flyteidl.admin.IActiveLaunchPlanRequest): flyteidl.admin.ActiveLaunchPlanRequest;

            /**
             * Encodes the specified ActiveLaunchPlanRequest message. Does not implicitly {@link flyteidl.admin.ActiveLaunchPlanRequest.verify|verify} messages.
             * @param message ActiveLaunchPlanRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IActiveLaunchPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveLaunchPlanRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveLaunchPlanRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ActiveLaunchPlanRequest;

            /**
             * Verifies an ActiveLaunchPlanRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ActiveLaunchPlanListRequest. */
        interface IActiveLaunchPlanListRequest {

            /** ActiveLaunchPlanListRequest project */
            project?: (string|null);

            /** ActiveLaunchPlanListRequest domain */
            domain?: (string|null);

            /** ActiveLaunchPlanListRequest limit */
            limit?: (number|null);

            /** ActiveLaunchPlanListRequest token */
            token?: (string|null);

            /** ActiveLaunchPlanListRequest sortBy */
            sortBy?: (flyteidl.admin.ISort|null);
        }

        /** Represents an ActiveLaunchPlanListRequest. */
        class ActiveLaunchPlanListRequest implements IActiveLaunchPlanListRequest {

            /**
             * Constructs a new ActiveLaunchPlanListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IActiveLaunchPlanListRequest);

            /** ActiveLaunchPlanListRequest project. */
            public project: string;

            /** ActiveLaunchPlanListRequest domain. */
            public domain: string;

            /** ActiveLaunchPlanListRequest limit. */
            public limit: number;

            /** ActiveLaunchPlanListRequest token. */
            public token: string;

            /** ActiveLaunchPlanListRequest sortBy. */
            public sortBy?: (flyteidl.admin.ISort|null);

            /**
             * Creates a new ActiveLaunchPlanListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveLaunchPlanListRequest instance
             */
            public static create(properties?: flyteidl.admin.IActiveLaunchPlanListRequest): flyteidl.admin.ActiveLaunchPlanListRequest;

            /**
             * Encodes the specified ActiveLaunchPlanListRequest message. Does not implicitly {@link flyteidl.admin.ActiveLaunchPlanListRequest.verify|verify} messages.
             * @param message ActiveLaunchPlanListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IActiveLaunchPlanListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveLaunchPlanListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveLaunchPlanListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ActiveLaunchPlanListRequest;

            /**
             * Verifies an ActiveLaunchPlanListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** FixedRateUnit enum. */
        enum FixedRateUnit {
            MINUTE = 0,
            HOUR = 1,
            DAY = 2
        }

        /** Properties of a FixedRate. */
        interface IFixedRate {

            /** FixedRate value */
            value?: (number|null);

            /** FixedRate unit */
            unit?: (flyteidl.admin.FixedRateUnit|null);
        }

        /** Represents a FixedRate. */
        class FixedRate implements IFixedRate {

            /**
             * Constructs a new FixedRate.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IFixedRate);

            /** FixedRate value. */
            public value: number;

            /** FixedRate unit. */
            public unit: flyteidl.admin.FixedRateUnit;

            /**
             * Creates a new FixedRate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FixedRate instance
             */
            public static create(properties?: flyteidl.admin.IFixedRate): flyteidl.admin.FixedRate;

            /**
             * Encodes the specified FixedRate message. Does not implicitly {@link flyteidl.admin.FixedRate.verify|verify} messages.
             * @param message FixedRate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IFixedRate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FixedRate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FixedRate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.FixedRate;

            /**
             * Verifies a FixedRate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Schedule. */
        interface ISchedule {

            /** Schedule cronExpression */
            cronExpression?: (string|null);

            /** Schedule rate */
            rate?: (flyteidl.admin.IFixedRate|null);

            /** Schedule kickoffTimeInputArg */
            kickoffTimeInputArg?: (string|null);
        }

        /** Represents a Schedule. */
        class Schedule implements ISchedule {

            /**
             * Constructs a new Schedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ISchedule);

            /** Schedule cronExpression. */
            public cronExpression: string;

            /** Schedule rate. */
            public rate?: (flyteidl.admin.IFixedRate|null);

            /** Schedule kickoffTimeInputArg. */
            public kickoffTimeInputArg: string;

            /** Schedule ScheduleExpression. */
            public ScheduleExpression?: ("cronExpression"|"rate");

            /**
             * Creates a new Schedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Schedule instance
             */
            public static create(properties?: flyteidl.admin.ISchedule): flyteidl.admin.Schedule;

            /**
             * Encodes the specified Schedule message. Does not implicitly {@link flyteidl.admin.Schedule.verify|verify} messages.
             * @param message Schedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Schedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Schedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Schedule;

            /**
             * Verifies a Schedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** MatchableResource enum. */
        enum MatchableResource {
            TASK_RESOURCE = 0,
            CLUSTER_RESOURCE = 1,
            EXECUTION_QUEUE = 2,
            EXECUTION_CLUSTER_LABEL = 3
        }

        /** Properties of a TaskResourceSpec. */
        interface ITaskResourceSpec {

            /** TaskResourceSpec cpu */
            cpu?: (string|null);

            /** TaskResourceSpec gpu */
            gpu?: (string|null);

            /** TaskResourceSpec memory */
            memory?: (string|null);

            /** TaskResourceSpec storage */
            storage?: (string|null);
        }

        /** Represents a TaskResourceSpec. */
        class TaskResourceSpec implements ITaskResourceSpec {

            /**
             * Constructs a new TaskResourceSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskResourceSpec);

            /** TaskResourceSpec cpu. */
            public cpu: string;

            /** TaskResourceSpec gpu. */
            public gpu: string;

            /** TaskResourceSpec memory. */
            public memory: string;

            /** TaskResourceSpec storage. */
            public storage: string;

            /**
             * Creates a new TaskResourceSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskResourceSpec instance
             */
            public static create(properties?: flyteidl.admin.ITaskResourceSpec): flyteidl.admin.TaskResourceSpec;

            /**
             * Encodes the specified TaskResourceSpec message. Does not implicitly {@link flyteidl.admin.TaskResourceSpec.verify|verify} messages.
             * @param message TaskResourceSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskResourceSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskResourceSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskResourceSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskResourceSpec;

            /**
             * Verifies a TaskResourceSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskResourceAttributes. */
        interface ITaskResourceAttributes {

            /** TaskResourceAttributes defaults */
            defaults?: (flyteidl.admin.ITaskResourceSpec|null);

            /** TaskResourceAttributes limits */
            limits?: (flyteidl.admin.ITaskResourceSpec|null);
        }

        /** Represents a TaskResourceAttributes. */
        class TaskResourceAttributes implements ITaskResourceAttributes {

            /**
             * Constructs a new TaskResourceAttributes.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskResourceAttributes);

            /** TaskResourceAttributes defaults. */
            public defaults?: (flyteidl.admin.ITaskResourceSpec|null);

            /** TaskResourceAttributes limits. */
            public limits?: (flyteidl.admin.ITaskResourceSpec|null);

            /**
             * Creates a new TaskResourceAttributes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskResourceAttributes instance
             */
            public static create(properties?: flyteidl.admin.ITaskResourceAttributes): flyteidl.admin.TaskResourceAttributes;

            /**
             * Encodes the specified TaskResourceAttributes message. Does not implicitly {@link flyteidl.admin.TaskResourceAttributes.verify|verify} messages.
             * @param message TaskResourceAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskResourceAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskResourceAttributes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskResourceAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskResourceAttributes;

            /**
             * Verifies a TaskResourceAttributes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ClusterResourceAttributes. */
        interface IClusterResourceAttributes {

            /** ClusterResourceAttributes attributes */
            attributes?: ({ [k: string]: string }|null);
        }

        /** Represents a ClusterResourceAttributes. */
        class ClusterResourceAttributes implements IClusterResourceAttributes {

            /**
             * Constructs a new ClusterResourceAttributes.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IClusterResourceAttributes);

            /** ClusterResourceAttributes attributes. */
            public attributes: { [k: string]: string };

            /**
             * Creates a new ClusterResourceAttributes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClusterResourceAttributes instance
             */
            public static create(properties?: flyteidl.admin.IClusterResourceAttributes): flyteidl.admin.ClusterResourceAttributes;

            /**
             * Encodes the specified ClusterResourceAttributes message. Does not implicitly {@link flyteidl.admin.ClusterResourceAttributes.verify|verify} messages.
             * @param message ClusterResourceAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IClusterResourceAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClusterResourceAttributes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClusterResourceAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ClusterResourceAttributes;

            /**
             * Verifies a ClusterResourceAttributes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionQueueAttributes. */
        interface IExecutionQueueAttributes {

            /** ExecutionQueueAttributes tags */
            tags?: (string[]|null);
        }

        /** Represents an ExecutionQueueAttributes. */
        class ExecutionQueueAttributes implements IExecutionQueueAttributes {

            /**
             * Constructs a new ExecutionQueueAttributes.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionQueueAttributes);

            /** ExecutionQueueAttributes tags. */
            public tags: string[];

            /**
             * Creates a new ExecutionQueueAttributes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionQueueAttributes instance
             */
            public static create(properties?: flyteidl.admin.IExecutionQueueAttributes): flyteidl.admin.ExecutionQueueAttributes;

            /**
             * Encodes the specified ExecutionQueueAttributes message. Does not implicitly {@link flyteidl.admin.ExecutionQueueAttributes.verify|verify} messages.
             * @param message ExecutionQueueAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionQueueAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionQueueAttributes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionQueueAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionQueueAttributes;

            /**
             * Verifies an ExecutionQueueAttributes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionClusterLabel. */
        interface IExecutionClusterLabel {

            /** ExecutionClusterLabel value */
            value?: (string|null);
        }

        /** Represents an ExecutionClusterLabel. */
        class ExecutionClusterLabel implements IExecutionClusterLabel {

            /**
             * Constructs a new ExecutionClusterLabel.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionClusterLabel);

            /** ExecutionClusterLabel value. */
            public value: string;

            /**
             * Creates a new ExecutionClusterLabel instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionClusterLabel instance
             */
            public static create(properties?: flyteidl.admin.IExecutionClusterLabel): flyteidl.admin.ExecutionClusterLabel;

            /**
             * Encodes the specified ExecutionClusterLabel message. Does not implicitly {@link flyteidl.admin.ExecutionClusterLabel.verify|verify} messages.
             * @param message ExecutionClusterLabel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionClusterLabel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionClusterLabel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionClusterLabel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionClusterLabel;

            /**
             * Verifies an ExecutionClusterLabel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a MatchingAttributes. */
        interface IMatchingAttributes {

            /** MatchingAttributes taskResourceAttributes */
            taskResourceAttributes?: (flyteidl.admin.ITaskResourceAttributes|null);

            /** MatchingAttributes clusterResourceAttributes */
            clusterResourceAttributes?: (flyteidl.admin.IClusterResourceAttributes|null);

            /** MatchingAttributes executionQueueAttributes */
            executionQueueAttributes?: (flyteidl.admin.IExecutionQueueAttributes|null);

            /** MatchingAttributes executionClusterLabel */
            executionClusterLabel?: (flyteidl.admin.IExecutionClusterLabel|null);
        }

        /** Represents a MatchingAttributes. */
        class MatchingAttributes implements IMatchingAttributes {

            /**
             * Constructs a new MatchingAttributes.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IMatchingAttributes);

            /** MatchingAttributes taskResourceAttributes. */
            public taskResourceAttributes?: (flyteidl.admin.ITaskResourceAttributes|null);

            /** MatchingAttributes clusterResourceAttributes. */
            public clusterResourceAttributes?: (flyteidl.admin.IClusterResourceAttributes|null);

            /** MatchingAttributes executionQueueAttributes. */
            public executionQueueAttributes?: (flyteidl.admin.IExecutionQueueAttributes|null);

            /** MatchingAttributes executionClusterLabel. */
            public executionClusterLabel?: (flyteidl.admin.IExecutionClusterLabel|null);

            /** MatchingAttributes target. */
            public target?: ("taskResourceAttributes"|"clusterResourceAttributes"|"executionQueueAttributes"|"executionClusterLabel");

            /**
             * Creates a new MatchingAttributes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MatchingAttributes instance
             */
            public static create(properties?: flyteidl.admin.IMatchingAttributes): flyteidl.admin.MatchingAttributes;

            /**
             * Encodes the specified MatchingAttributes message. Does not implicitly {@link flyteidl.admin.MatchingAttributes.verify|verify} messages.
             * @param message MatchingAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IMatchingAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MatchingAttributes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MatchingAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.MatchingAttributes;

            /**
             * Verifies a MatchingAttributes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a MatchableAttributesConfiguration. */
        interface IMatchableAttributesConfiguration {

            /** MatchableAttributesConfiguration attributes */
            attributes?: (flyteidl.admin.IMatchingAttributes|null);

            /** MatchableAttributesConfiguration domain */
            domain?: (string|null);

            /** MatchableAttributesConfiguration project */
            project?: (string|null);

            /** MatchableAttributesConfiguration workflow */
            workflow?: (string|null);

            /** MatchableAttributesConfiguration launchPlan */
            launchPlan?: (string|null);
        }

        /** Represents a MatchableAttributesConfiguration. */
        class MatchableAttributesConfiguration implements IMatchableAttributesConfiguration {

            /**
             * Constructs a new MatchableAttributesConfiguration.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IMatchableAttributesConfiguration);

            /** MatchableAttributesConfiguration attributes. */
            public attributes?: (flyteidl.admin.IMatchingAttributes|null);

            /** MatchableAttributesConfiguration domain. */
            public domain: string;

            /** MatchableAttributesConfiguration project. */
            public project: string;

            /** MatchableAttributesConfiguration workflow. */
            public workflow: string;

            /** MatchableAttributesConfiguration launchPlan. */
            public launchPlan: string;

            /**
             * Creates a new MatchableAttributesConfiguration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MatchableAttributesConfiguration instance
             */
            public static create(properties?: flyteidl.admin.IMatchableAttributesConfiguration): flyteidl.admin.MatchableAttributesConfiguration;

            /**
             * Encodes the specified MatchableAttributesConfiguration message. Does not implicitly {@link flyteidl.admin.MatchableAttributesConfiguration.verify|verify} messages.
             * @param message MatchableAttributesConfiguration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IMatchableAttributesConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MatchableAttributesConfiguration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MatchableAttributesConfiguration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.MatchableAttributesConfiguration;

            /**
             * Verifies a MatchableAttributesConfiguration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ListMatchableAttributesRequest. */
        interface IListMatchableAttributesRequest {

            /** ListMatchableAttributesRequest resourceType */
            resourceType?: (flyteidl.admin.MatchableResource|null);
        }

        /** Represents a ListMatchableAttributesRequest. */
        class ListMatchableAttributesRequest implements IListMatchableAttributesRequest {

            /**
             * Constructs a new ListMatchableAttributesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IListMatchableAttributesRequest);

            /** ListMatchableAttributesRequest resourceType. */
            public resourceType: flyteidl.admin.MatchableResource;

            /**
             * Creates a new ListMatchableAttributesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListMatchableAttributesRequest instance
             */
            public static create(properties?: flyteidl.admin.IListMatchableAttributesRequest): flyteidl.admin.ListMatchableAttributesRequest;

            /**
             * Encodes the specified ListMatchableAttributesRequest message. Does not implicitly {@link flyteidl.admin.ListMatchableAttributesRequest.verify|verify} messages.
             * @param message ListMatchableAttributesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IListMatchableAttributesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListMatchableAttributesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListMatchableAttributesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ListMatchableAttributesRequest;

            /**
             * Verifies a ListMatchableAttributesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ListMatchableAttributesResponse. */
        interface IListMatchableAttributesResponse {

            /** ListMatchableAttributesResponse configurations */
            configurations?: (flyteidl.admin.IMatchableAttributesConfiguration[]|null);
        }

        /** Represents a ListMatchableAttributesResponse. */
        class ListMatchableAttributesResponse implements IListMatchableAttributesResponse {

            /**
             * Constructs a new ListMatchableAttributesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IListMatchableAttributesResponse);

            /** ListMatchableAttributesResponse configurations. */
            public configurations: flyteidl.admin.IMatchableAttributesConfiguration[];

            /**
             * Creates a new ListMatchableAttributesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListMatchableAttributesResponse instance
             */
            public static create(properties?: flyteidl.admin.IListMatchableAttributesResponse): flyteidl.admin.ListMatchableAttributesResponse;

            /**
             * Encodes the specified ListMatchableAttributesResponse message. Does not implicitly {@link flyteidl.admin.ListMatchableAttributesResponse.verify|verify} messages.
             * @param message ListMatchableAttributesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IListMatchableAttributesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListMatchableAttributesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListMatchableAttributesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ListMatchableAttributesResponse;

            /**
             * Verifies a ListMatchableAttributesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionGetRequest. */
        interface INodeExecutionGetRequest {

            /** NodeExecutionGetRequest id */
            id?: (flyteidl.core.INodeExecutionIdentifier|null);
        }

        /** Represents a NodeExecutionGetRequest. */
        class NodeExecutionGetRequest implements INodeExecutionGetRequest {

            /**
             * Constructs a new NodeExecutionGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionGetRequest);

            /** NodeExecutionGetRequest id. */
            public id?: (flyteidl.core.INodeExecutionIdentifier|null);

            /**
             * Creates a new NodeExecutionGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionGetRequest instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionGetRequest): flyteidl.admin.NodeExecutionGetRequest;

            /**
             * Encodes the specified NodeExecutionGetRequest message. Does not implicitly {@link flyteidl.admin.NodeExecutionGetRequest.verify|verify} messages.
             * @param message NodeExecutionGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionGetRequest;

            /**
             * Verifies a NodeExecutionGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionListRequest. */
        interface INodeExecutionListRequest {

            /** NodeExecutionListRequest workflowExecutionId */
            workflowExecutionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** NodeExecutionListRequest limit */
            limit?: (number|null);

            /** NodeExecutionListRequest token */
            token?: (string|null);

            /** NodeExecutionListRequest filters */
            filters?: (string|null);

            /** NodeExecutionListRequest sortBy */
            sortBy?: (flyteidl.admin.ISort|null);
        }

        /** Represents a NodeExecutionListRequest. */
        class NodeExecutionListRequest implements INodeExecutionListRequest {

            /**
             * Constructs a new NodeExecutionListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionListRequest);

            /** NodeExecutionListRequest workflowExecutionId. */
            public workflowExecutionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /** NodeExecutionListRequest limit. */
            public limit: number;

            /** NodeExecutionListRequest token. */
            public token: string;

            /** NodeExecutionListRequest filters. */
            public filters: string;

            /** NodeExecutionListRequest sortBy. */
            public sortBy?: (flyteidl.admin.ISort|null);

            /**
             * Creates a new NodeExecutionListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionListRequest instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionListRequest): flyteidl.admin.NodeExecutionListRequest;

            /**
             * Encodes the specified NodeExecutionListRequest message. Does not implicitly {@link flyteidl.admin.NodeExecutionListRequest.verify|verify} messages.
             * @param message NodeExecutionListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionListRequest;

            /**
             * Verifies a NodeExecutionListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionForTaskListRequest. */
        interface INodeExecutionForTaskListRequest {

            /** NodeExecutionForTaskListRequest taskExecutionId */
            taskExecutionId?: (flyteidl.core.ITaskExecutionIdentifier|null);

            /** NodeExecutionForTaskListRequest limit */
            limit?: (number|null);

            /** NodeExecutionForTaskListRequest token */
            token?: (string|null);

            /** NodeExecutionForTaskListRequest filters */
            filters?: (string|null);

            /** NodeExecutionForTaskListRequest sortBy */
            sortBy?: (flyteidl.admin.ISort|null);
        }

        /** Represents a NodeExecutionForTaskListRequest. */
        class NodeExecutionForTaskListRequest implements INodeExecutionForTaskListRequest {

            /**
             * Constructs a new NodeExecutionForTaskListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionForTaskListRequest);

            /** NodeExecutionForTaskListRequest taskExecutionId. */
            public taskExecutionId?: (flyteidl.core.ITaskExecutionIdentifier|null);

            /** NodeExecutionForTaskListRequest limit. */
            public limit: number;

            /** NodeExecutionForTaskListRequest token. */
            public token: string;

            /** NodeExecutionForTaskListRequest filters. */
            public filters: string;

            /** NodeExecutionForTaskListRequest sortBy. */
            public sortBy?: (flyteidl.admin.ISort|null);

            /**
             * Creates a new NodeExecutionForTaskListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionForTaskListRequest instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionForTaskListRequest): flyteidl.admin.NodeExecutionForTaskListRequest;

            /**
             * Encodes the specified NodeExecutionForTaskListRequest message. Does not implicitly {@link flyteidl.admin.NodeExecutionForTaskListRequest.verify|verify} messages.
             * @param message NodeExecutionForTaskListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionForTaskListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionForTaskListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionForTaskListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionForTaskListRequest;

            /**
             * Verifies a NodeExecutionForTaskListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecution. */
        interface INodeExecution {

            /** NodeExecution id */
            id?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** NodeExecution inputUri */
            inputUri?: (string|null);

            /** NodeExecution closure */
            closure?: (flyteidl.admin.INodeExecutionClosure|null);

            /** NodeExecution metadata */
            metadata?: (flyteidl.admin.INodeExecutionMetaData|null);
        }

        /** Represents a NodeExecution. */
        class NodeExecution implements INodeExecution {

            /**
             * Constructs a new NodeExecution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecution);

            /** NodeExecution id. */
            public id?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** NodeExecution inputUri. */
            public inputUri: string;

            /** NodeExecution closure. */
            public closure?: (flyteidl.admin.INodeExecutionClosure|null);

            /** NodeExecution metadata. */
            public metadata?: (flyteidl.admin.INodeExecutionMetaData|null);

            /**
             * Creates a new NodeExecution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecution instance
             */
            public static create(properties?: flyteidl.admin.INodeExecution): flyteidl.admin.NodeExecution;

            /**
             * Encodes the specified NodeExecution message. Does not implicitly {@link flyteidl.admin.NodeExecution.verify|verify} messages.
             * @param message NodeExecution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecution;

            /**
             * Verifies a NodeExecution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionMetaData. */
        interface INodeExecutionMetaData {
        }

        /** Represents a NodeExecutionMetaData. */
        class NodeExecutionMetaData implements INodeExecutionMetaData {

            /**
             * Constructs a new NodeExecutionMetaData.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionMetaData);

            /**
             * Creates a new NodeExecutionMetaData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionMetaData instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionMetaData): flyteidl.admin.NodeExecutionMetaData;

            /**
             * Encodes the specified NodeExecutionMetaData message. Does not implicitly {@link flyteidl.admin.NodeExecutionMetaData.verify|verify} messages.
             * @param message NodeExecutionMetaData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionMetaData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionMetaData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionMetaData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionMetaData;

            /**
             * Verifies a NodeExecutionMetaData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionList. */
        interface INodeExecutionList {

            /** NodeExecutionList nodeExecutions */
            nodeExecutions?: (flyteidl.admin.INodeExecution[]|null);

            /** NodeExecutionList token */
            token?: (string|null);
        }

        /** Represents a NodeExecutionList. */
        class NodeExecutionList implements INodeExecutionList {

            /**
             * Constructs a new NodeExecutionList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionList);

            /** NodeExecutionList nodeExecutions. */
            public nodeExecutions: flyteidl.admin.INodeExecution[];

            /** NodeExecutionList token. */
            public token: string;

            /**
             * Creates a new NodeExecutionList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionList instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionList): flyteidl.admin.NodeExecutionList;

            /**
             * Encodes the specified NodeExecutionList message. Does not implicitly {@link flyteidl.admin.NodeExecutionList.verify|verify} messages.
             * @param message NodeExecutionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionList;

            /**
             * Verifies a NodeExecutionList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionClosure. */
        interface INodeExecutionClosure {

            /** NodeExecutionClosure outputUri */
            outputUri?: (string|null);

            /** NodeExecutionClosure error */
            error?: (flyteidl.core.IExecutionError|null);

            /** NodeExecutionClosure phase */
            phase?: (flyteidl.core.NodeExecution.Phase|null);

            /** NodeExecutionClosure startedAt */
            startedAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionClosure duration */
            duration?: (google.protobuf.IDuration|null);

            /** NodeExecutionClosure createdAt */
            createdAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionClosure updatedAt */
            updatedAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionClosure workflowNodeMetadata */
            workflowNodeMetadata?: (flyteidl.admin.IWorkflowNodeMetadata|null);
        }

        /** Represents a NodeExecutionClosure. */
        class NodeExecutionClosure implements INodeExecutionClosure {

            /**
             * Constructs a new NodeExecutionClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionClosure);

            /** NodeExecutionClosure outputUri. */
            public outputUri: string;

            /** NodeExecutionClosure error. */
            public error?: (flyteidl.core.IExecutionError|null);

            /** NodeExecutionClosure phase. */
            public phase: flyteidl.core.NodeExecution.Phase;

            /** NodeExecutionClosure startedAt. */
            public startedAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionClosure duration. */
            public duration?: (google.protobuf.IDuration|null);

            /** NodeExecutionClosure createdAt. */
            public createdAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionClosure updatedAt. */
            public updatedAt?: (google.protobuf.ITimestamp|null);

            /** NodeExecutionClosure workflowNodeMetadata. */
            public workflowNodeMetadata?: (flyteidl.admin.IWorkflowNodeMetadata|null);

            /** NodeExecutionClosure outputResult. */
            public outputResult?: ("outputUri"|"error");

            /** NodeExecutionClosure targetMetadata. */
            public targetMetadata?: "workflowNodeMetadata";

            /**
             * Creates a new NodeExecutionClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionClosure instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionClosure): flyteidl.admin.NodeExecutionClosure;

            /**
             * Encodes the specified NodeExecutionClosure message. Does not implicitly {@link flyteidl.admin.NodeExecutionClosure.verify|verify} messages.
             * @param message NodeExecutionClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionClosure;

            /**
             * Verifies a NodeExecutionClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowNodeMetadata. */
        interface IWorkflowNodeMetadata {

            /** WorkflowNodeMetadata executionId */
            executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);
        }

        /** Represents a WorkflowNodeMetadata. */
        class WorkflowNodeMetadata implements IWorkflowNodeMetadata {

            /**
             * Constructs a new WorkflowNodeMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowNodeMetadata);

            /** WorkflowNodeMetadata executionId. */
            public executionId?: (flyteidl.core.IWorkflowExecutionIdentifier|null);

            /**
             * Creates a new WorkflowNodeMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowNodeMetadata instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowNodeMetadata): flyteidl.admin.WorkflowNodeMetadata;

            /**
             * Encodes the specified WorkflowNodeMetadata message. Does not implicitly {@link flyteidl.admin.WorkflowNodeMetadata.verify|verify} messages.
             * @param message WorkflowNodeMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowNodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowNodeMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowNodeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowNodeMetadata;

            /**
             * Verifies a WorkflowNodeMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionGetDataRequest. */
        interface INodeExecutionGetDataRequest {

            /** NodeExecutionGetDataRequest id */
            id?: (flyteidl.core.INodeExecutionIdentifier|null);
        }

        /** Represents a NodeExecutionGetDataRequest. */
        class NodeExecutionGetDataRequest implements INodeExecutionGetDataRequest {

            /**
             * Constructs a new NodeExecutionGetDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionGetDataRequest);

            /** NodeExecutionGetDataRequest id. */
            public id?: (flyteidl.core.INodeExecutionIdentifier|null);

            /**
             * Creates a new NodeExecutionGetDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionGetDataRequest instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionGetDataRequest): flyteidl.admin.NodeExecutionGetDataRequest;

            /**
             * Encodes the specified NodeExecutionGetDataRequest message. Does not implicitly {@link flyteidl.admin.NodeExecutionGetDataRequest.verify|verify} messages.
             * @param message NodeExecutionGetDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionGetDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionGetDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionGetDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionGetDataRequest;

            /**
             * Verifies a NodeExecutionGetDataRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionGetDataResponse. */
        interface INodeExecutionGetDataResponse {

            /** NodeExecutionGetDataResponse inputs */
            inputs?: (flyteidl.admin.IUrlBlob|null);

            /** NodeExecutionGetDataResponse outputs */
            outputs?: (flyteidl.admin.IUrlBlob|null);
        }

        /** Represents a NodeExecutionGetDataResponse. */
        class NodeExecutionGetDataResponse implements INodeExecutionGetDataResponse {

            /**
             * Constructs a new NodeExecutionGetDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionGetDataResponse);

            /** NodeExecutionGetDataResponse inputs. */
            public inputs?: (flyteidl.admin.IUrlBlob|null);

            /** NodeExecutionGetDataResponse outputs. */
            public outputs?: (flyteidl.admin.IUrlBlob|null);

            /**
             * Creates a new NodeExecutionGetDataResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionGetDataResponse instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionGetDataResponse): flyteidl.admin.NodeExecutionGetDataResponse;

            /**
             * Encodes the specified NodeExecutionGetDataResponse message. Does not implicitly {@link flyteidl.admin.NodeExecutionGetDataResponse.verify|verify} messages.
             * @param message NodeExecutionGetDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionGetDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionGetDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionGetDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionGetDataResponse;

            /**
             * Verifies a NodeExecutionGetDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EmailMessage. */
        interface IEmailMessage {

            /** EmailMessage recipientsEmail */
            recipientsEmail?: (string[]|null);

            /** EmailMessage senderEmail */
            senderEmail?: (string|null);

            /** EmailMessage subjectLine */
            subjectLine?: (string|null);

            /** EmailMessage body */
            body?: (string|null);
        }

        /** Represents an EmailMessage. */
        class EmailMessage implements IEmailMessage {

            /**
             * Constructs a new EmailMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IEmailMessage);

            /** EmailMessage recipientsEmail. */
            public recipientsEmail: string[];

            /** EmailMessage senderEmail. */
            public senderEmail: string;

            /** EmailMessage subjectLine. */
            public subjectLine: string;

            /** EmailMessage body. */
            public body: string;

            /**
             * Creates a new EmailMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EmailMessage instance
             */
            public static create(properties?: flyteidl.admin.IEmailMessage): flyteidl.admin.EmailMessage;

            /**
             * Encodes the specified EmailMessage message. Does not implicitly {@link flyteidl.admin.EmailMessage.verify|verify} messages.
             * @param message EmailMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IEmailMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EmailMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EmailMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.EmailMessage;

            /**
             * Verifies an EmailMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Domain. */
        interface IDomain {

            /** Domain id */
            id?: (string|null);

            /** Domain name */
            name?: (string|null);
        }

        /** Represents a Domain. */
        class Domain implements IDomain {

            /**
             * Constructs a new Domain.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IDomain);

            /** Domain id. */
            public id: string;

            /** Domain name. */
            public name: string;

            /**
             * Creates a new Domain instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Domain instance
             */
            public static create(properties?: flyteidl.admin.IDomain): flyteidl.admin.Domain;

            /**
             * Encodes the specified Domain message. Does not implicitly {@link flyteidl.admin.Domain.verify|verify} messages.
             * @param message Domain message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IDomain, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Domain message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Domain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Domain;

            /**
             * Verifies a Domain message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Project. */
        interface IProject {

            /** Project id */
            id?: (string|null);

            /** Project name */
            name?: (string|null);

            /** Project domains */
            domains?: (flyteidl.admin.IDomain[]|null);

            /** Project description */
            description?: (string|null);
        }

        /** Represents a Project. */
        class Project implements IProject {

            /**
             * Constructs a new Project.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProject);

            /** Project id. */
            public id: string;

            /** Project name. */
            public name: string;

            /** Project domains. */
            public domains: flyteidl.admin.IDomain[];

            /** Project description. */
            public description: string;

            /**
             * Creates a new Project instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Project instance
             */
            public static create(properties?: flyteidl.admin.IProject): flyteidl.admin.Project;

            /**
             * Encodes the specified Project message. Does not implicitly {@link flyteidl.admin.Project.verify|verify} messages.
             * @param message Project message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Project message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Project
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Project;

            /**
             * Verifies a Project message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Projects. */
        interface IProjects {

            /** Projects projects */
            projects?: (flyteidl.admin.IProject[]|null);
        }

        /** Represents a Projects. */
        class Projects implements IProjects {

            /**
             * Constructs a new Projects.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjects);

            /** Projects projects. */
            public projects: flyteidl.admin.IProject[];

            /**
             * Creates a new Projects instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Projects instance
             */
            public static create(properties?: flyteidl.admin.IProjects): flyteidl.admin.Projects;

            /**
             * Encodes the specified Projects message. Does not implicitly {@link flyteidl.admin.Projects.verify|verify} messages.
             * @param message Projects message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjects, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Projects message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Projects
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Projects;

            /**
             * Verifies a Projects message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectListRequest. */
        interface IProjectListRequest {
        }

        /** Represents a ProjectListRequest. */
        class ProjectListRequest implements IProjectListRequest {

            /**
             * Constructs a new ProjectListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectListRequest);

            /**
             * Creates a new ProjectListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectListRequest instance
             */
            public static create(properties?: flyteidl.admin.IProjectListRequest): flyteidl.admin.ProjectListRequest;

            /**
             * Encodes the specified ProjectListRequest message. Does not implicitly {@link flyteidl.admin.ProjectListRequest.verify|verify} messages.
             * @param message ProjectListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectListRequest;

            /**
             * Verifies a ProjectListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectRegisterRequest. */
        interface IProjectRegisterRequest {

            /** ProjectRegisterRequest project */
            project?: (flyteidl.admin.IProject|null);
        }

        /** Represents a ProjectRegisterRequest. */
        class ProjectRegisterRequest implements IProjectRegisterRequest {

            /**
             * Constructs a new ProjectRegisterRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectRegisterRequest);

            /** ProjectRegisterRequest project. */
            public project?: (flyteidl.admin.IProject|null);

            /**
             * Creates a new ProjectRegisterRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectRegisterRequest instance
             */
            public static create(properties?: flyteidl.admin.IProjectRegisterRequest): flyteidl.admin.ProjectRegisterRequest;

            /**
             * Encodes the specified ProjectRegisterRequest message. Does not implicitly {@link flyteidl.admin.ProjectRegisterRequest.verify|verify} messages.
             * @param message ProjectRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectRegisterRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectRegisterRequest;

            /**
             * Verifies a ProjectRegisterRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectRegisterResponse. */
        interface IProjectRegisterResponse {
        }

        /** Represents a ProjectRegisterResponse. */
        class ProjectRegisterResponse implements IProjectRegisterResponse {

            /**
             * Constructs a new ProjectRegisterResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectRegisterResponse);

            /**
             * Creates a new ProjectRegisterResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectRegisterResponse instance
             */
            public static create(properties?: flyteidl.admin.IProjectRegisterResponse): flyteidl.admin.ProjectRegisterResponse;

            /**
             * Encodes the specified ProjectRegisterResponse message. Does not implicitly {@link flyteidl.admin.ProjectRegisterResponse.verify|verify} messages.
             * @param message ProjectRegisterResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectRegisterResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectRegisterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectRegisterResponse;

            /**
             * Verifies a ProjectRegisterResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectDomainAttributes. */
        interface IProjectDomainAttributes {

            /** ProjectDomainAttributes project */
            project?: (string|null);

            /** ProjectDomainAttributes domain */
            domain?: (string|null);

            /** ProjectDomainAttributes matchingAttributes */
            matchingAttributes?: (flyteidl.admin.IMatchingAttributes|null);
        }

        /** Represents a ProjectDomainAttributes. */
        class ProjectDomainAttributes implements IProjectDomainAttributes {

            /**
             * Constructs a new ProjectDomainAttributes.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectDomainAttributes);

            /** ProjectDomainAttributes project. */
            public project: string;

            /** ProjectDomainAttributes domain. */
            public domain: string;

            /** ProjectDomainAttributes matchingAttributes. */
            public matchingAttributes?: (flyteidl.admin.IMatchingAttributes|null);

            /**
             * Creates a new ProjectDomainAttributes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectDomainAttributes instance
             */
            public static create(properties?: flyteidl.admin.IProjectDomainAttributes): flyteidl.admin.ProjectDomainAttributes;

            /**
             * Encodes the specified ProjectDomainAttributes message. Does not implicitly {@link flyteidl.admin.ProjectDomainAttributes.verify|verify} messages.
             * @param message ProjectDomainAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectDomainAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectDomainAttributes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectDomainAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectDomainAttributes;

            /**
             * Verifies a ProjectDomainAttributes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectDomainAttributesUpdateRequest. */
        interface IProjectDomainAttributesUpdateRequest {

            /** ProjectDomainAttributesUpdateRequest attributes */
            attributes?: (flyteidl.admin.IProjectDomainAttributes|null);
        }

        /** Represents a ProjectDomainAttributesUpdateRequest. */
        class ProjectDomainAttributesUpdateRequest implements IProjectDomainAttributesUpdateRequest {

            /**
             * Constructs a new ProjectDomainAttributesUpdateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectDomainAttributesUpdateRequest);

            /** ProjectDomainAttributesUpdateRequest attributes. */
            public attributes?: (flyteidl.admin.IProjectDomainAttributes|null);

            /**
             * Creates a new ProjectDomainAttributesUpdateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectDomainAttributesUpdateRequest instance
             */
            public static create(properties?: flyteidl.admin.IProjectDomainAttributesUpdateRequest): flyteidl.admin.ProjectDomainAttributesUpdateRequest;

            /**
             * Encodes the specified ProjectDomainAttributesUpdateRequest message. Does not implicitly {@link flyteidl.admin.ProjectDomainAttributesUpdateRequest.verify|verify} messages.
             * @param message ProjectDomainAttributesUpdateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectDomainAttributesUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectDomainAttributesUpdateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectDomainAttributesUpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectDomainAttributesUpdateRequest;

            /**
             * Verifies a ProjectDomainAttributesUpdateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectDomainAttributesUpdateResponse. */
        interface IProjectDomainAttributesUpdateResponse {
        }

        /** Represents a ProjectDomainAttributesUpdateResponse. */
        class ProjectDomainAttributesUpdateResponse implements IProjectDomainAttributesUpdateResponse {

            /**
             * Constructs a new ProjectDomainAttributesUpdateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectDomainAttributesUpdateResponse);

            /**
             * Creates a new ProjectDomainAttributesUpdateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectDomainAttributesUpdateResponse instance
             */
            public static create(properties?: flyteidl.admin.IProjectDomainAttributesUpdateResponse): flyteidl.admin.ProjectDomainAttributesUpdateResponse;

            /**
             * Encodes the specified ProjectDomainAttributesUpdateResponse message. Does not implicitly {@link flyteidl.admin.ProjectDomainAttributesUpdateResponse.verify|verify} messages.
             * @param message ProjectDomainAttributesUpdateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectDomainAttributesUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectDomainAttributesUpdateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectDomainAttributesUpdateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectDomainAttributesUpdateResponse;

            /**
             * Verifies a ProjectDomainAttributesUpdateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectDomainAttributesGetRequest. */
        interface IProjectDomainAttributesGetRequest {

            /** ProjectDomainAttributesGetRequest project */
            project?: (string|null);

            /** ProjectDomainAttributesGetRequest domain */
            domain?: (string|null);

            /** ProjectDomainAttributesGetRequest resourceType */
            resourceType?: (flyteidl.admin.MatchableResource|null);
        }

        /** Represents a ProjectDomainAttributesGetRequest. */
        class ProjectDomainAttributesGetRequest implements IProjectDomainAttributesGetRequest {

            /**
             * Constructs a new ProjectDomainAttributesGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectDomainAttributesGetRequest);

            /** ProjectDomainAttributesGetRequest project. */
            public project: string;

            /** ProjectDomainAttributesGetRequest domain. */
            public domain: string;

            /** ProjectDomainAttributesGetRequest resourceType. */
            public resourceType: flyteidl.admin.MatchableResource;

            /**
             * Creates a new ProjectDomainAttributesGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectDomainAttributesGetRequest instance
             */
            public static create(properties?: flyteidl.admin.IProjectDomainAttributesGetRequest): flyteidl.admin.ProjectDomainAttributesGetRequest;

            /**
             * Encodes the specified ProjectDomainAttributesGetRequest message. Does not implicitly {@link flyteidl.admin.ProjectDomainAttributesGetRequest.verify|verify} messages.
             * @param message ProjectDomainAttributesGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectDomainAttributesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectDomainAttributesGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectDomainAttributesGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectDomainAttributesGetRequest;

            /**
             * Verifies a ProjectDomainAttributesGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectDomainAttributesGetResponse. */
        interface IProjectDomainAttributesGetResponse {

            /** ProjectDomainAttributesGetResponse attributes */
            attributes?: (flyteidl.admin.IProjectDomainAttributes|null);
        }

        /** Represents a ProjectDomainAttributesGetResponse. */
        class ProjectDomainAttributesGetResponse implements IProjectDomainAttributesGetResponse {

            /**
             * Constructs a new ProjectDomainAttributesGetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectDomainAttributesGetResponse);

            /** ProjectDomainAttributesGetResponse attributes. */
            public attributes?: (flyteidl.admin.IProjectDomainAttributes|null);

            /**
             * Creates a new ProjectDomainAttributesGetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectDomainAttributesGetResponse instance
             */
            public static create(properties?: flyteidl.admin.IProjectDomainAttributesGetResponse): flyteidl.admin.ProjectDomainAttributesGetResponse;

            /**
             * Encodes the specified ProjectDomainAttributesGetResponse message. Does not implicitly {@link flyteidl.admin.ProjectDomainAttributesGetResponse.verify|verify} messages.
             * @param message ProjectDomainAttributesGetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectDomainAttributesGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectDomainAttributesGetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectDomainAttributesGetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectDomainAttributesGetResponse;

            /**
             * Verifies a ProjectDomainAttributesGetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectDomainAttributesDeleteRequest. */
        interface IProjectDomainAttributesDeleteRequest {

            /** ProjectDomainAttributesDeleteRequest project */
            project?: (string|null);

            /** ProjectDomainAttributesDeleteRequest domain */
            domain?: (string|null);

            /** ProjectDomainAttributesDeleteRequest resourceType */
            resourceType?: (flyteidl.admin.MatchableResource|null);
        }

        /** Represents a ProjectDomainAttributesDeleteRequest. */
        class ProjectDomainAttributesDeleteRequest implements IProjectDomainAttributesDeleteRequest {

            /**
             * Constructs a new ProjectDomainAttributesDeleteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectDomainAttributesDeleteRequest);

            /** ProjectDomainAttributesDeleteRequest project. */
            public project: string;

            /** ProjectDomainAttributesDeleteRequest domain. */
            public domain: string;

            /** ProjectDomainAttributesDeleteRequest resourceType. */
            public resourceType: flyteidl.admin.MatchableResource;

            /**
             * Creates a new ProjectDomainAttributesDeleteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectDomainAttributesDeleteRequest instance
             */
            public static create(properties?: flyteidl.admin.IProjectDomainAttributesDeleteRequest): flyteidl.admin.ProjectDomainAttributesDeleteRequest;

            /**
             * Encodes the specified ProjectDomainAttributesDeleteRequest message. Does not implicitly {@link flyteidl.admin.ProjectDomainAttributesDeleteRequest.verify|verify} messages.
             * @param message ProjectDomainAttributesDeleteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectDomainAttributesDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectDomainAttributesDeleteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectDomainAttributesDeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectDomainAttributesDeleteRequest;

            /**
             * Verifies a ProjectDomainAttributesDeleteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ProjectDomainAttributesDeleteResponse. */
        interface IProjectDomainAttributesDeleteResponse {
        }

        /** Represents a ProjectDomainAttributesDeleteResponse. */
        class ProjectDomainAttributesDeleteResponse implements IProjectDomainAttributesDeleteResponse {

            /**
             * Constructs a new ProjectDomainAttributesDeleteResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IProjectDomainAttributesDeleteResponse);

            /**
             * Creates a new ProjectDomainAttributesDeleteResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProjectDomainAttributesDeleteResponse instance
             */
            public static create(properties?: flyteidl.admin.IProjectDomainAttributesDeleteResponse): flyteidl.admin.ProjectDomainAttributesDeleteResponse;

            /**
             * Encodes the specified ProjectDomainAttributesDeleteResponse message. Does not implicitly {@link flyteidl.admin.ProjectDomainAttributesDeleteResponse.verify|verify} messages.
             * @param message ProjectDomainAttributesDeleteResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IProjectDomainAttributesDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProjectDomainAttributesDeleteResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProjectDomainAttributesDeleteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ProjectDomainAttributesDeleteResponse;

            /**
             * Verifies a ProjectDomainAttributesDeleteResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskCreateRequest. */
        interface ITaskCreateRequest {

            /** TaskCreateRequest id */
            id?: (flyteidl.core.IIdentifier|null);

            /** TaskCreateRequest spec */
            spec?: (flyteidl.admin.ITaskSpec|null);
        }

        /** Represents a TaskCreateRequest. */
        class TaskCreateRequest implements ITaskCreateRequest {

            /**
             * Constructs a new TaskCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskCreateRequest);

            /** TaskCreateRequest id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** TaskCreateRequest spec. */
            public spec?: (flyteidl.admin.ITaskSpec|null);

            /**
             * Creates a new TaskCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.ITaskCreateRequest): flyteidl.admin.TaskCreateRequest;

            /**
             * Encodes the specified TaskCreateRequest message. Does not implicitly {@link flyteidl.admin.TaskCreateRequest.verify|verify} messages.
             * @param message TaskCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskCreateRequest;

            /**
             * Verifies a TaskCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskCreateResponse. */
        interface ITaskCreateResponse {
        }

        /** Represents a TaskCreateResponse. */
        class TaskCreateResponse implements ITaskCreateResponse {

            /**
             * Constructs a new TaskCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskCreateResponse);

            /**
             * Creates a new TaskCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.ITaskCreateResponse): flyteidl.admin.TaskCreateResponse;

            /**
             * Encodes the specified TaskCreateResponse message. Does not implicitly {@link flyteidl.admin.TaskCreateResponse.verify|verify} messages.
             * @param message TaskCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskCreateResponse;

            /**
             * Verifies a TaskCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Task. */
        interface ITask {

            /** Task id */
            id?: (flyteidl.core.IIdentifier|null);

            /** Task closure */
            closure?: (flyteidl.admin.ITaskClosure|null);
        }

        /** Represents a Task. */
        class Task implements ITask {

            /**
             * Constructs a new Task.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITask);

            /** Task id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** Task closure. */
            public closure?: (flyteidl.admin.ITaskClosure|null);

            /**
             * Creates a new Task instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Task instance
             */
            public static create(properties?: flyteidl.admin.ITask): flyteidl.admin.Task;

            /**
             * Encodes the specified Task message. Does not implicitly {@link flyteidl.admin.Task.verify|verify} messages.
             * @param message Task message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Task message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Task;

            /**
             * Verifies a Task message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskList. */
        interface ITaskList {

            /** TaskList tasks */
            tasks?: (flyteidl.admin.ITask[]|null);

            /** TaskList token */
            token?: (string|null);
        }

        /** Represents a TaskList. */
        class TaskList implements ITaskList {

            /**
             * Constructs a new TaskList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskList);

            /** TaskList tasks. */
            public tasks: flyteidl.admin.ITask[];

            /** TaskList token. */
            public token: string;

            /**
             * Creates a new TaskList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskList instance
             */
            public static create(properties?: flyteidl.admin.ITaskList): flyteidl.admin.TaskList;

            /**
             * Encodes the specified TaskList message. Does not implicitly {@link flyteidl.admin.TaskList.verify|verify} messages.
             * @param message TaskList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskList;

            /**
             * Verifies a TaskList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskSpec. */
        interface ITaskSpec {

            /** TaskSpec template */
            template?: (flyteidl.core.ITaskTemplate|null);
        }

        /** Represents a TaskSpec. */
        class TaskSpec implements ITaskSpec {

            /**
             * Constructs a new TaskSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskSpec);

            /** TaskSpec template. */
            public template?: (flyteidl.core.ITaskTemplate|null);

            /**
             * Creates a new TaskSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskSpec instance
             */
            public static create(properties?: flyteidl.admin.ITaskSpec): flyteidl.admin.TaskSpec;

            /**
             * Encodes the specified TaskSpec message. Does not implicitly {@link flyteidl.admin.TaskSpec.verify|verify} messages.
             * @param message TaskSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskSpec;

            /**
             * Verifies a TaskSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskClosure. */
        interface ITaskClosure {

            /** TaskClosure compiledTask */
            compiledTask?: (flyteidl.core.ICompiledTask|null);

            /** TaskClosure createdAt */
            createdAt?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a TaskClosure. */
        class TaskClosure implements ITaskClosure {

            /**
             * Constructs a new TaskClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskClosure);

            /** TaskClosure compiledTask. */
            public compiledTask?: (flyteidl.core.ICompiledTask|null);

            /** TaskClosure createdAt. */
            public createdAt?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new TaskClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskClosure instance
             */
            public static create(properties?: flyteidl.admin.ITaskClosure): flyteidl.admin.TaskClosure;

            /**
             * Encodes the specified TaskClosure message. Does not implicitly {@link flyteidl.admin.TaskClosure.verify|verify} messages.
             * @param message TaskClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskClosure;

            /**
             * Verifies a TaskClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionGetRequest. */
        interface ITaskExecutionGetRequest {

            /** TaskExecutionGetRequest id */
            id?: (flyteidl.core.ITaskExecutionIdentifier|null);
        }

        /** Represents a TaskExecutionGetRequest. */
        class TaskExecutionGetRequest implements ITaskExecutionGetRequest {

            /**
             * Constructs a new TaskExecutionGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionGetRequest);

            /** TaskExecutionGetRequest id. */
            public id?: (flyteidl.core.ITaskExecutionIdentifier|null);

            /**
             * Creates a new TaskExecutionGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionGetRequest instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionGetRequest): flyteidl.admin.TaskExecutionGetRequest;

            /**
             * Encodes the specified TaskExecutionGetRequest message. Does not implicitly {@link flyteidl.admin.TaskExecutionGetRequest.verify|verify} messages.
             * @param message TaskExecutionGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionGetRequest;

            /**
             * Verifies a TaskExecutionGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionListRequest. */
        interface ITaskExecutionListRequest {

            /** TaskExecutionListRequest nodeExecutionId */
            nodeExecutionId?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** TaskExecutionListRequest limit */
            limit?: (number|null);

            /** TaskExecutionListRequest token */
            token?: (string|null);

            /** TaskExecutionListRequest filters */
            filters?: (string|null);

            /** TaskExecutionListRequest sortBy */
            sortBy?: (flyteidl.admin.ISort|null);
        }

        /** Represents a TaskExecutionListRequest. */
        class TaskExecutionListRequest implements ITaskExecutionListRequest {

            /**
             * Constructs a new TaskExecutionListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionListRequest);

            /** TaskExecutionListRequest nodeExecutionId. */
            public nodeExecutionId?: (flyteidl.core.INodeExecutionIdentifier|null);

            /** TaskExecutionListRequest limit. */
            public limit: number;

            /** TaskExecutionListRequest token. */
            public token: string;

            /** TaskExecutionListRequest filters. */
            public filters: string;

            /** TaskExecutionListRequest sortBy. */
            public sortBy?: (flyteidl.admin.ISort|null);

            /**
             * Creates a new TaskExecutionListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionListRequest instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionListRequest): flyteidl.admin.TaskExecutionListRequest;

            /**
             * Encodes the specified TaskExecutionListRequest message. Does not implicitly {@link flyteidl.admin.TaskExecutionListRequest.verify|verify} messages.
             * @param message TaskExecutionListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionListRequest;

            /**
             * Verifies a TaskExecutionListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecution. */
        interface ITaskExecution {

            /** TaskExecution id */
            id?: (flyteidl.core.ITaskExecutionIdentifier|null);

            /** TaskExecution inputUri */
            inputUri?: (string|null);

            /** TaskExecution closure */
            closure?: (flyteidl.admin.ITaskExecutionClosure|null);

            /** TaskExecution isParent */
            isParent?: (boolean|null);
        }

        /** Represents a TaskExecution. */
        class TaskExecution implements ITaskExecution {

            /**
             * Constructs a new TaskExecution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecution);

            /** TaskExecution id. */
            public id?: (flyteidl.core.ITaskExecutionIdentifier|null);

            /** TaskExecution inputUri. */
            public inputUri: string;

            /** TaskExecution closure. */
            public closure?: (flyteidl.admin.ITaskExecutionClosure|null);

            /** TaskExecution isParent. */
            public isParent: boolean;

            /**
             * Creates a new TaskExecution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecution instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecution): flyteidl.admin.TaskExecution;

            /**
             * Encodes the specified TaskExecution message. Does not implicitly {@link flyteidl.admin.TaskExecution.verify|verify} messages.
             * @param message TaskExecution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecution;

            /**
             * Verifies a TaskExecution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionList. */
        interface ITaskExecutionList {

            /** TaskExecutionList taskExecutions */
            taskExecutions?: (flyteidl.admin.ITaskExecution[]|null);

            /** TaskExecutionList token */
            token?: (string|null);
        }

        /** Represents a TaskExecutionList. */
        class TaskExecutionList implements ITaskExecutionList {

            /**
             * Constructs a new TaskExecutionList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionList);

            /** TaskExecutionList taskExecutions. */
            public taskExecutions: flyteidl.admin.ITaskExecution[];

            /** TaskExecutionList token. */
            public token: string;

            /**
             * Creates a new TaskExecutionList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionList instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionList): flyteidl.admin.TaskExecutionList;

            /**
             * Encodes the specified TaskExecutionList message. Does not implicitly {@link flyteidl.admin.TaskExecutionList.verify|verify} messages.
             * @param message TaskExecutionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionList;

            /**
             * Verifies a TaskExecutionList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionClosure. */
        interface ITaskExecutionClosure {

            /** TaskExecutionClosure outputUri */
            outputUri?: (string|null);

            /** TaskExecutionClosure error */
            error?: (flyteidl.core.IExecutionError|null);

            /** TaskExecutionClosure phase */
            phase?: (flyteidl.core.TaskExecution.Phase|null);

            /** TaskExecutionClosure logs */
            logs?: (flyteidl.core.ITaskLog[]|null);

            /** TaskExecutionClosure startedAt */
            startedAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionClosure duration */
            duration?: (google.protobuf.IDuration|null);

            /** TaskExecutionClosure createdAt */
            createdAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionClosure updatedAt */
            updatedAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionClosure customInfo */
            customInfo?: (google.protobuf.IStruct|null);
        }

        /** Represents a TaskExecutionClosure. */
        class TaskExecutionClosure implements ITaskExecutionClosure {

            /**
             * Constructs a new TaskExecutionClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionClosure);

            /** TaskExecutionClosure outputUri. */
            public outputUri: string;

            /** TaskExecutionClosure error. */
            public error?: (flyteidl.core.IExecutionError|null);

            /** TaskExecutionClosure phase. */
            public phase: flyteidl.core.TaskExecution.Phase;

            /** TaskExecutionClosure logs. */
            public logs: flyteidl.core.ITaskLog[];

            /** TaskExecutionClosure startedAt. */
            public startedAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionClosure duration. */
            public duration?: (google.protobuf.IDuration|null);

            /** TaskExecutionClosure createdAt. */
            public createdAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionClosure updatedAt. */
            public updatedAt?: (google.protobuf.ITimestamp|null);

            /** TaskExecutionClosure customInfo. */
            public customInfo?: (google.protobuf.IStruct|null);

            /** TaskExecutionClosure outputResult. */
            public outputResult?: ("outputUri"|"error");

            /**
             * Creates a new TaskExecutionClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionClosure instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionClosure): flyteidl.admin.TaskExecutionClosure;

            /**
             * Encodes the specified TaskExecutionClosure message. Does not implicitly {@link flyteidl.admin.TaskExecutionClosure.verify|verify} messages.
             * @param message TaskExecutionClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionClosure;

            /**
             * Verifies a TaskExecutionClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionGetDataRequest. */
        interface ITaskExecutionGetDataRequest {

            /** TaskExecutionGetDataRequest id */
            id?: (flyteidl.core.ITaskExecutionIdentifier|null);
        }

        /** Represents a TaskExecutionGetDataRequest. */
        class TaskExecutionGetDataRequest implements ITaskExecutionGetDataRequest {

            /**
             * Constructs a new TaskExecutionGetDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionGetDataRequest);

            /** TaskExecutionGetDataRequest id. */
            public id?: (flyteidl.core.ITaskExecutionIdentifier|null);

            /**
             * Creates a new TaskExecutionGetDataRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionGetDataRequest instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionGetDataRequest): flyteidl.admin.TaskExecutionGetDataRequest;

            /**
             * Encodes the specified TaskExecutionGetDataRequest message. Does not implicitly {@link flyteidl.admin.TaskExecutionGetDataRequest.verify|verify} messages.
             * @param message TaskExecutionGetDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionGetDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionGetDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionGetDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionGetDataRequest;

            /**
             * Verifies a TaskExecutionGetDataRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskExecutionGetDataResponse. */
        interface ITaskExecutionGetDataResponse {

            /** TaskExecutionGetDataResponse inputs */
            inputs?: (flyteidl.admin.IUrlBlob|null);

            /** TaskExecutionGetDataResponse outputs */
            outputs?: (flyteidl.admin.IUrlBlob|null);
        }

        /** Represents a TaskExecutionGetDataResponse. */
        class TaskExecutionGetDataResponse implements ITaskExecutionGetDataResponse {

            /**
             * Constructs a new TaskExecutionGetDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskExecutionGetDataResponse);

            /** TaskExecutionGetDataResponse inputs. */
            public inputs?: (flyteidl.admin.IUrlBlob|null);

            /** TaskExecutionGetDataResponse outputs. */
            public outputs?: (flyteidl.admin.IUrlBlob|null);

            /**
             * Creates a new TaskExecutionGetDataResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskExecutionGetDataResponse instance
             */
            public static create(properties?: flyteidl.admin.ITaskExecutionGetDataResponse): flyteidl.admin.TaskExecutionGetDataResponse;

            /**
             * Encodes the specified TaskExecutionGetDataResponse message. Does not implicitly {@link flyteidl.admin.TaskExecutionGetDataResponse.verify|verify} messages.
             * @param message TaskExecutionGetDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskExecutionGetDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskExecutionGetDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskExecutionGetDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskExecutionGetDataResponse;

            /**
             * Verifies a TaskExecutionGetDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowCreateRequest. */
        interface IWorkflowCreateRequest {

            /** WorkflowCreateRequest id */
            id?: (flyteidl.core.IIdentifier|null);

            /** WorkflowCreateRequest spec */
            spec?: (flyteidl.admin.IWorkflowSpec|null);
        }

        /** Represents a WorkflowCreateRequest. */
        class WorkflowCreateRequest implements IWorkflowCreateRequest {

            /**
             * Constructs a new WorkflowCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowCreateRequest);

            /** WorkflowCreateRequest id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** WorkflowCreateRequest spec. */
            public spec?: (flyteidl.admin.IWorkflowSpec|null);

            /**
             * Creates a new WorkflowCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowCreateRequest): flyteidl.admin.WorkflowCreateRequest;

            /**
             * Encodes the specified WorkflowCreateRequest message. Does not implicitly {@link flyteidl.admin.WorkflowCreateRequest.verify|verify} messages.
             * @param message WorkflowCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowCreateRequest;

            /**
             * Verifies a WorkflowCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowCreateResponse. */
        interface IWorkflowCreateResponse {
        }

        /** Represents a WorkflowCreateResponse. */
        class WorkflowCreateResponse implements IWorkflowCreateResponse {

            /**
             * Constructs a new WorkflowCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowCreateResponse);

            /**
             * Creates a new WorkflowCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowCreateResponse): flyteidl.admin.WorkflowCreateResponse;

            /**
             * Encodes the specified WorkflowCreateResponse message. Does not implicitly {@link flyteidl.admin.WorkflowCreateResponse.verify|verify} messages.
             * @param message WorkflowCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowCreateResponse;

            /**
             * Verifies a WorkflowCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Workflow. */
        interface IWorkflow {

            /** Workflow id */
            id?: (flyteidl.core.IIdentifier|null);

            /** Workflow closure */
            closure?: (flyteidl.admin.IWorkflowClosure|null);
        }

        /** Represents a Workflow. */
        class Workflow implements IWorkflow {

            /**
             * Constructs a new Workflow.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflow);

            /** Workflow id. */
            public id?: (flyteidl.core.IIdentifier|null);

            /** Workflow closure. */
            public closure?: (flyteidl.admin.IWorkflowClosure|null);

            /**
             * Creates a new Workflow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Workflow instance
             */
            public static create(properties?: flyteidl.admin.IWorkflow): flyteidl.admin.Workflow;

            /**
             * Encodes the specified Workflow message. Does not implicitly {@link flyteidl.admin.Workflow.verify|verify} messages.
             * @param message Workflow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Workflow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Workflow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Workflow;

            /**
             * Verifies a Workflow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowList. */
        interface IWorkflowList {

            /** WorkflowList workflows */
            workflows?: (flyteidl.admin.IWorkflow[]|null);

            /** WorkflowList token */
            token?: (string|null);
        }

        /** Represents a WorkflowList. */
        class WorkflowList implements IWorkflowList {

            /**
             * Constructs a new WorkflowList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowList);

            /** WorkflowList workflows. */
            public workflows: flyteidl.admin.IWorkflow[];

            /** WorkflowList token. */
            public token: string;

            /**
             * Creates a new WorkflowList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowList instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowList): flyteidl.admin.WorkflowList;

            /**
             * Encodes the specified WorkflowList message. Does not implicitly {@link flyteidl.admin.WorkflowList.verify|verify} messages.
             * @param message WorkflowList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowList;

            /**
             * Verifies a WorkflowList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowSpec. */
        interface IWorkflowSpec {

            /** WorkflowSpec template */
            template?: (flyteidl.core.IWorkflowTemplate|null);

            /** WorkflowSpec subWorkflows */
            subWorkflows?: (flyteidl.core.IWorkflowTemplate[]|null);
        }

        /** Represents a WorkflowSpec. */
        class WorkflowSpec implements IWorkflowSpec {

            /**
             * Constructs a new WorkflowSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowSpec);

            /** WorkflowSpec template. */
            public template?: (flyteidl.core.IWorkflowTemplate|null);

            /** WorkflowSpec subWorkflows. */
            public subWorkflows: flyteidl.core.IWorkflowTemplate[];

            /**
             * Creates a new WorkflowSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowSpec instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowSpec): flyteidl.admin.WorkflowSpec;

            /**
             * Encodes the specified WorkflowSpec message. Does not implicitly {@link flyteidl.admin.WorkflowSpec.verify|verify} messages.
             * @param message WorkflowSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowSpec;

            /**
             * Verifies a WorkflowSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowClosure. */
        interface IWorkflowClosure {

            /** WorkflowClosure compiledWorkflow */
            compiledWorkflow?: (flyteidl.core.ICompiledWorkflowClosure|null);

            /** WorkflowClosure createdAt */
            createdAt?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a WorkflowClosure. */
        class WorkflowClosure implements IWorkflowClosure {

            /**
             * Constructs a new WorkflowClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowClosure);

            /** WorkflowClosure compiledWorkflow. */
            public compiledWorkflow?: (flyteidl.core.ICompiledWorkflowClosure|null);

            /** WorkflowClosure createdAt. */
            public createdAt?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new WorkflowClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowClosure instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowClosure): flyteidl.admin.WorkflowClosure;

            /**
             * Encodes the specified WorkflowClosure message. Does not implicitly {@link flyteidl.admin.WorkflowClosure.verify|verify} messages.
             * @param message WorkflowClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowClosure;

            /**
             * Verifies a WorkflowClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowAttributes. */
        interface IWorkflowAttributes {

            /** WorkflowAttributes project */
            project?: (string|null);

            /** WorkflowAttributes domain */
            domain?: (string|null);

            /** WorkflowAttributes workflow */
            workflow?: (string|null);

            /** WorkflowAttributes matchingAttributes */
            matchingAttributes?: (flyteidl.admin.IMatchingAttributes|null);
        }

        /** Represents a WorkflowAttributes. */
        class WorkflowAttributes implements IWorkflowAttributes {

            /**
             * Constructs a new WorkflowAttributes.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowAttributes);

            /** WorkflowAttributes project. */
            public project: string;

            /** WorkflowAttributes domain. */
            public domain: string;

            /** WorkflowAttributes workflow. */
            public workflow: string;

            /** WorkflowAttributes matchingAttributes. */
            public matchingAttributes?: (flyteidl.admin.IMatchingAttributes|null);

            /**
             * Creates a new WorkflowAttributes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowAttributes instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowAttributes): flyteidl.admin.WorkflowAttributes;

            /**
             * Encodes the specified WorkflowAttributes message. Does not implicitly {@link flyteidl.admin.WorkflowAttributes.verify|verify} messages.
             * @param message WorkflowAttributes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowAttributes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowAttributes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowAttributes;

            /**
             * Verifies a WorkflowAttributes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowAttributesUpdateRequest. */
        interface IWorkflowAttributesUpdateRequest {

            /** WorkflowAttributesUpdateRequest attributes */
            attributes?: (flyteidl.admin.IWorkflowAttributes|null);
        }

        /** Represents a WorkflowAttributesUpdateRequest. */
        class WorkflowAttributesUpdateRequest implements IWorkflowAttributesUpdateRequest {

            /**
             * Constructs a new WorkflowAttributesUpdateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowAttributesUpdateRequest);

            /** WorkflowAttributesUpdateRequest attributes. */
            public attributes?: (flyteidl.admin.IWorkflowAttributes|null);

            /**
             * Creates a new WorkflowAttributesUpdateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowAttributesUpdateRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowAttributesUpdateRequest): flyteidl.admin.WorkflowAttributesUpdateRequest;

            /**
             * Encodes the specified WorkflowAttributesUpdateRequest message. Does not implicitly {@link flyteidl.admin.WorkflowAttributesUpdateRequest.verify|verify} messages.
             * @param message WorkflowAttributesUpdateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowAttributesUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowAttributesUpdateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowAttributesUpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowAttributesUpdateRequest;

            /**
             * Verifies a WorkflowAttributesUpdateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowAttributesUpdateResponse. */
        interface IWorkflowAttributesUpdateResponse {
        }

        /** Represents a WorkflowAttributesUpdateResponse. */
        class WorkflowAttributesUpdateResponse implements IWorkflowAttributesUpdateResponse {

            /**
             * Constructs a new WorkflowAttributesUpdateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowAttributesUpdateResponse);

            /**
             * Creates a new WorkflowAttributesUpdateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowAttributesUpdateResponse instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowAttributesUpdateResponse): flyteidl.admin.WorkflowAttributesUpdateResponse;

            /**
             * Encodes the specified WorkflowAttributesUpdateResponse message. Does not implicitly {@link flyteidl.admin.WorkflowAttributesUpdateResponse.verify|verify} messages.
             * @param message WorkflowAttributesUpdateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowAttributesUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowAttributesUpdateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowAttributesUpdateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowAttributesUpdateResponse;

            /**
             * Verifies a WorkflowAttributesUpdateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowAttributesGetRequest. */
        interface IWorkflowAttributesGetRequest {

            /** WorkflowAttributesGetRequest project */
            project?: (string|null);

            /** WorkflowAttributesGetRequest domain */
            domain?: (string|null);

            /** WorkflowAttributesGetRequest workflow */
            workflow?: (string|null);

            /** WorkflowAttributesGetRequest resourceType */
            resourceType?: (flyteidl.admin.MatchableResource|null);
        }

        /** Represents a WorkflowAttributesGetRequest. */
        class WorkflowAttributesGetRequest implements IWorkflowAttributesGetRequest {

            /**
             * Constructs a new WorkflowAttributesGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowAttributesGetRequest);

            /** WorkflowAttributesGetRequest project. */
            public project: string;

            /** WorkflowAttributesGetRequest domain. */
            public domain: string;

            /** WorkflowAttributesGetRequest workflow. */
            public workflow: string;

            /** WorkflowAttributesGetRequest resourceType. */
            public resourceType: flyteidl.admin.MatchableResource;

            /**
             * Creates a new WorkflowAttributesGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowAttributesGetRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowAttributesGetRequest): flyteidl.admin.WorkflowAttributesGetRequest;

            /**
             * Encodes the specified WorkflowAttributesGetRequest message. Does not implicitly {@link flyteidl.admin.WorkflowAttributesGetRequest.verify|verify} messages.
             * @param message WorkflowAttributesGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowAttributesGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowAttributesGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowAttributesGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowAttributesGetRequest;

            /**
             * Verifies a WorkflowAttributesGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowAttributesGetResponse. */
        interface IWorkflowAttributesGetResponse {

            /** WorkflowAttributesGetResponse attributes */
            attributes?: (flyteidl.admin.IWorkflowAttributes|null);
        }

        /** Represents a WorkflowAttributesGetResponse. */
        class WorkflowAttributesGetResponse implements IWorkflowAttributesGetResponse {

            /**
             * Constructs a new WorkflowAttributesGetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowAttributesGetResponse);

            /** WorkflowAttributesGetResponse attributes. */
            public attributes?: (flyteidl.admin.IWorkflowAttributes|null);

            /**
             * Creates a new WorkflowAttributesGetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowAttributesGetResponse instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowAttributesGetResponse): flyteidl.admin.WorkflowAttributesGetResponse;

            /**
             * Encodes the specified WorkflowAttributesGetResponse message. Does not implicitly {@link flyteidl.admin.WorkflowAttributesGetResponse.verify|verify} messages.
             * @param message WorkflowAttributesGetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowAttributesGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowAttributesGetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowAttributesGetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowAttributesGetResponse;

            /**
             * Verifies a WorkflowAttributesGetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowAttributesDeleteRequest. */
        interface IWorkflowAttributesDeleteRequest {

            /** WorkflowAttributesDeleteRequest project */
            project?: (string|null);

            /** WorkflowAttributesDeleteRequest domain */
            domain?: (string|null);

            /** WorkflowAttributesDeleteRequest workflow */
            workflow?: (string|null);

            /** WorkflowAttributesDeleteRequest resourceType */
            resourceType?: (flyteidl.admin.MatchableResource|null);
        }

        /** Represents a WorkflowAttributesDeleteRequest. */
        class WorkflowAttributesDeleteRequest implements IWorkflowAttributesDeleteRequest {

            /**
             * Constructs a new WorkflowAttributesDeleteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowAttributesDeleteRequest);

            /** WorkflowAttributesDeleteRequest project. */
            public project: string;

            /** WorkflowAttributesDeleteRequest domain. */
            public domain: string;

            /** WorkflowAttributesDeleteRequest workflow. */
            public workflow: string;

            /** WorkflowAttributesDeleteRequest resourceType. */
            public resourceType: flyteidl.admin.MatchableResource;

            /**
             * Creates a new WorkflowAttributesDeleteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowAttributesDeleteRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowAttributesDeleteRequest): flyteidl.admin.WorkflowAttributesDeleteRequest;

            /**
             * Encodes the specified WorkflowAttributesDeleteRequest message. Does not implicitly {@link flyteidl.admin.WorkflowAttributesDeleteRequest.verify|verify} messages.
             * @param message WorkflowAttributesDeleteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowAttributesDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowAttributesDeleteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowAttributesDeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowAttributesDeleteRequest;

            /**
             * Verifies a WorkflowAttributesDeleteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowAttributesDeleteResponse. */
        interface IWorkflowAttributesDeleteResponse {
        }

        /** Represents a WorkflowAttributesDeleteResponse. */
        class WorkflowAttributesDeleteResponse implements IWorkflowAttributesDeleteResponse {

            /**
             * Constructs a new WorkflowAttributesDeleteResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowAttributesDeleteResponse);

            /**
             * Creates a new WorkflowAttributesDeleteResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowAttributesDeleteResponse instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowAttributesDeleteResponse): flyteidl.admin.WorkflowAttributesDeleteResponse;

            /**
             * Encodes the specified WorkflowAttributesDeleteResponse message. Does not implicitly {@link flyteidl.admin.WorkflowAttributesDeleteResponse.verify|verify} messages.
             * @param message WorkflowAttributesDeleteResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowAttributesDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowAttributesDeleteResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowAttributesDeleteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowAttributesDeleteResponse;

            /**
             * Verifies a WorkflowAttributesDeleteResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Namespace service. */
    namespace service {

        /** Represents an AdminService */
        class AdminService extends $protobuf.rpc.Service {

            /**
             * Constructs a new AdminService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new AdminService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AdminService;

            /**
             * Calls CreateTask.
             * @param request TaskCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskCreateResponse
             */
            public createTask(request: flyteidl.admin.ITaskCreateRequest, callback: flyteidl.service.AdminService.CreateTaskCallback): void;

            /**
             * Calls CreateTask.
             * @param request TaskCreateRequest message or plain object
             * @returns Promise
             */
            public createTask(request: flyteidl.admin.ITaskCreateRequest): Promise<flyteidl.admin.TaskCreateResponse>;

            /**
             * Calls GetTask.
             * @param request ObjectGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Task
             */
            public getTask(request: flyteidl.admin.IObjectGetRequest, callback: flyteidl.service.AdminService.GetTaskCallback): void;

            /**
             * Calls GetTask.
             * @param request ObjectGetRequest message or plain object
             * @returns Promise
             */
            public getTask(request: flyteidl.admin.IObjectGetRequest): Promise<flyteidl.admin.Task>;

            /**
             * Calls ListTaskIds.
             * @param request NamedEntityIdentifierListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NamedEntityIdentifierList
             */
            public listTaskIds(request: flyteidl.admin.INamedEntityIdentifierListRequest, callback: flyteidl.service.AdminService.ListTaskIdsCallback): void;

            /**
             * Calls ListTaskIds.
             * @param request NamedEntityIdentifierListRequest message or plain object
             * @returns Promise
             */
            public listTaskIds(request: flyteidl.admin.INamedEntityIdentifierListRequest): Promise<flyteidl.admin.NamedEntityIdentifierList>;

            /**
             * Calls ListTasks.
             * @param request ResourceListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskList
             */
            public listTasks(request: flyteidl.admin.IResourceListRequest, callback: flyteidl.service.AdminService.ListTasksCallback): void;

            /**
             * Calls ListTasks.
             * @param request ResourceListRequest message or plain object
             * @returns Promise
             */
            public listTasks(request: flyteidl.admin.IResourceListRequest): Promise<flyteidl.admin.TaskList>;

            /**
             * Calls CreateWorkflow.
             * @param request WorkflowCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowCreateResponse
             */
            public createWorkflow(request: flyteidl.admin.IWorkflowCreateRequest, callback: flyteidl.service.AdminService.CreateWorkflowCallback): void;

            /**
             * Calls CreateWorkflow.
             * @param request WorkflowCreateRequest message or plain object
             * @returns Promise
             */
            public createWorkflow(request: flyteidl.admin.IWorkflowCreateRequest): Promise<flyteidl.admin.WorkflowCreateResponse>;

            /**
             * Calls GetWorkflow.
             * @param request ObjectGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Workflow
             */
            public getWorkflow(request: flyteidl.admin.IObjectGetRequest, callback: flyteidl.service.AdminService.GetWorkflowCallback): void;

            /**
             * Calls GetWorkflow.
             * @param request ObjectGetRequest message or plain object
             * @returns Promise
             */
            public getWorkflow(request: flyteidl.admin.IObjectGetRequest): Promise<flyteidl.admin.Workflow>;

            /**
             * Calls ListWorkflowIds.
             * @param request NamedEntityIdentifierListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NamedEntityIdentifierList
             */
            public listWorkflowIds(request: flyteidl.admin.INamedEntityIdentifierListRequest, callback: flyteidl.service.AdminService.ListWorkflowIdsCallback): void;

            /**
             * Calls ListWorkflowIds.
             * @param request NamedEntityIdentifierListRequest message or plain object
             * @returns Promise
             */
            public listWorkflowIds(request: flyteidl.admin.INamedEntityIdentifierListRequest): Promise<flyteidl.admin.NamedEntityIdentifierList>;

            /**
             * Calls ListWorkflows.
             * @param request ResourceListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowList
             */
            public listWorkflows(request: flyteidl.admin.IResourceListRequest, callback: flyteidl.service.AdminService.ListWorkflowsCallback): void;

            /**
             * Calls ListWorkflows.
             * @param request ResourceListRequest message or plain object
             * @returns Promise
             */
            public listWorkflows(request: flyteidl.admin.IResourceListRequest): Promise<flyteidl.admin.WorkflowList>;

            /**
             * Calls CreateLaunchPlan.
             * @param request LaunchPlanCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlanCreateResponse
             */
            public createLaunchPlan(request: flyteidl.admin.ILaunchPlanCreateRequest, callback: flyteidl.service.AdminService.CreateLaunchPlanCallback): void;

            /**
             * Calls CreateLaunchPlan.
             * @param request LaunchPlanCreateRequest message or plain object
             * @returns Promise
             */
            public createLaunchPlan(request: flyteidl.admin.ILaunchPlanCreateRequest): Promise<flyteidl.admin.LaunchPlanCreateResponse>;

            /**
             * Calls GetLaunchPlan.
             * @param request ObjectGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlan
             */
            public getLaunchPlan(request: flyteidl.admin.IObjectGetRequest, callback: flyteidl.service.AdminService.GetLaunchPlanCallback): void;

            /**
             * Calls GetLaunchPlan.
             * @param request ObjectGetRequest message or plain object
             * @returns Promise
             */
            public getLaunchPlan(request: flyteidl.admin.IObjectGetRequest): Promise<flyteidl.admin.LaunchPlan>;

            /**
             * Calls GetActiveLaunchPlan.
             * @param request ActiveLaunchPlanRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlan
             */
            public getActiveLaunchPlan(request: flyteidl.admin.IActiveLaunchPlanRequest, callback: flyteidl.service.AdminService.GetActiveLaunchPlanCallback): void;

            /**
             * Calls GetActiveLaunchPlan.
             * @param request ActiveLaunchPlanRequest message or plain object
             * @returns Promise
             */
            public getActiveLaunchPlan(request: flyteidl.admin.IActiveLaunchPlanRequest): Promise<flyteidl.admin.LaunchPlan>;

            /**
             * Calls ListActiveLaunchPlans.
             * @param request ActiveLaunchPlanListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlanList
             */
            public listActiveLaunchPlans(request: flyteidl.admin.IActiveLaunchPlanListRequest, callback: flyteidl.service.AdminService.ListActiveLaunchPlansCallback): void;

            /**
             * Calls ListActiveLaunchPlans.
             * @param request ActiveLaunchPlanListRequest message or plain object
             * @returns Promise
             */
            public listActiveLaunchPlans(request: flyteidl.admin.IActiveLaunchPlanListRequest): Promise<flyteidl.admin.LaunchPlanList>;

            /**
             * Calls ListLaunchPlanIds.
             * @param request NamedEntityIdentifierListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NamedEntityIdentifierList
             */
            public listLaunchPlanIds(request: flyteidl.admin.INamedEntityIdentifierListRequest, callback: flyteidl.service.AdminService.ListLaunchPlanIdsCallback): void;

            /**
             * Calls ListLaunchPlanIds.
             * @param request NamedEntityIdentifierListRequest message or plain object
             * @returns Promise
             */
            public listLaunchPlanIds(request: flyteidl.admin.INamedEntityIdentifierListRequest): Promise<flyteidl.admin.NamedEntityIdentifierList>;

            /**
             * Calls ListLaunchPlans.
             * @param request ResourceListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlanList
             */
            public listLaunchPlans(request: flyteidl.admin.IResourceListRequest, callback: flyteidl.service.AdminService.ListLaunchPlansCallback): void;

            /**
             * Calls ListLaunchPlans.
             * @param request ResourceListRequest message or plain object
             * @returns Promise
             */
            public listLaunchPlans(request: flyteidl.admin.IResourceListRequest): Promise<flyteidl.admin.LaunchPlanList>;

            /**
             * Calls UpdateLaunchPlan.
             * @param request LaunchPlanUpdateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlanUpdateResponse
             */
            public updateLaunchPlan(request: flyteidl.admin.ILaunchPlanUpdateRequest, callback: flyteidl.service.AdminService.UpdateLaunchPlanCallback): void;

            /**
             * Calls UpdateLaunchPlan.
             * @param request LaunchPlanUpdateRequest message or plain object
             * @returns Promise
             */
            public updateLaunchPlan(request: flyteidl.admin.ILaunchPlanUpdateRequest): Promise<flyteidl.admin.LaunchPlanUpdateResponse>;

            /**
             * Calls CreateExecution.
             * @param request ExecutionCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ExecutionCreateResponse
             */
            public createExecution(request: flyteidl.admin.IExecutionCreateRequest, callback: flyteidl.service.AdminService.CreateExecutionCallback): void;

            /**
             * Calls CreateExecution.
             * @param request ExecutionCreateRequest message or plain object
             * @returns Promise
             */
            public createExecution(request: flyteidl.admin.IExecutionCreateRequest): Promise<flyteidl.admin.ExecutionCreateResponse>;

            /**
             * Calls RelaunchExecution.
             * @param request ExecutionRelaunchRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ExecutionCreateResponse
             */
            public relaunchExecution(request: flyteidl.admin.IExecutionRelaunchRequest, callback: flyteidl.service.AdminService.RelaunchExecutionCallback): void;

            /**
             * Calls RelaunchExecution.
             * @param request ExecutionRelaunchRequest message or plain object
             * @returns Promise
             */
            public relaunchExecution(request: flyteidl.admin.IExecutionRelaunchRequest): Promise<flyteidl.admin.ExecutionCreateResponse>;

            /**
             * Calls GetExecution.
             * @param request WorkflowExecutionGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Execution
             */
            public getExecution(request: flyteidl.admin.IWorkflowExecutionGetRequest, callback: flyteidl.service.AdminService.GetExecutionCallback): void;

            /**
             * Calls GetExecution.
             * @param request WorkflowExecutionGetRequest message or plain object
             * @returns Promise
             */
            public getExecution(request: flyteidl.admin.IWorkflowExecutionGetRequest): Promise<flyteidl.admin.Execution>;

            /**
             * Calls GetExecutionData.
             * @param request WorkflowExecutionGetDataRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowExecutionGetDataResponse
             */
            public getExecutionData(request: flyteidl.admin.IWorkflowExecutionGetDataRequest, callback: flyteidl.service.AdminService.GetExecutionDataCallback): void;

            /**
             * Calls GetExecutionData.
             * @param request WorkflowExecutionGetDataRequest message or plain object
             * @returns Promise
             */
            public getExecutionData(request: flyteidl.admin.IWorkflowExecutionGetDataRequest): Promise<flyteidl.admin.WorkflowExecutionGetDataResponse>;

            /**
             * Calls ListExecutions.
             * @param request ResourceListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ExecutionList
             */
            public listExecutions(request: flyteidl.admin.IResourceListRequest, callback: flyteidl.service.AdminService.ListExecutionsCallback): void;

            /**
             * Calls ListExecutions.
             * @param request ResourceListRequest message or plain object
             * @returns Promise
             */
            public listExecutions(request: flyteidl.admin.IResourceListRequest): Promise<flyteidl.admin.ExecutionList>;

            /**
             * Calls TerminateExecution.
             * @param request ExecutionTerminateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ExecutionTerminateResponse
             */
            public terminateExecution(request: flyteidl.admin.IExecutionTerminateRequest, callback: flyteidl.service.AdminService.TerminateExecutionCallback): void;

            /**
             * Calls TerminateExecution.
             * @param request ExecutionTerminateRequest message or plain object
             * @returns Promise
             */
            public terminateExecution(request: flyteidl.admin.IExecutionTerminateRequest): Promise<flyteidl.admin.ExecutionTerminateResponse>;

            /**
             * Calls GetNodeExecution.
             * @param request NodeExecutionGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NodeExecution
             */
            public getNodeExecution(request: flyteidl.admin.INodeExecutionGetRequest, callback: flyteidl.service.AdminService.GetNodeExecutionCallback): void;

            /**
             * Calls GetNodeExecution.
             * @param request NodeExecutionGetRequest message or plain object
             * @returns Promise
             */
            public getNodeExecution(request: flyteidl.admin.INodeExecutionGetRequest): Promise<flyteidl.admin.NodeExecution>;

            /**
             * Calls ListNodeExecutions.
             * @param request NodeExecutionListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NodeExecutionList
             */
            public listNodeExecutions(request: flyteidl.admin.INodeExecutionListRequest, callback: flyteidl.service.AdminService.ListNodeExecutionsCallback): void;

            /**
             * Calls ListNodeExecutions.
             * @param request NodeExecutionListRequest message or plain object
             * @returns Promise
             */
            public listNodeExecutions(request: flyteidl.admin.INodeExecutionListRequest): Promise<flyteidl.admin.NodeExecutionList>;

            /**
             * Calls ListNodeExecutionsForTask.
             * @param request NodeExecutionForTaskListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NodeExecutionList
             */
            public listNodeExecutionsForTask(request: flyteidl.admin.INodeExecutionForTaskListRequest, callback: flyteidl.service.AdminService.ListNodeExecutionsForTaskCallback): void;

            /**
             * Calls ListNodeExecutionsForTask.
             * @param request NodeExecutionForTaskListRequest message or plain object
             * @returns Promise
             */
            public listNodeExecutionsForTask(request: flyteidl.admin.INodeExecutionForTaskListRequest): Promise<flyteidl.admin.NodeExecutionList>;

            /**
             * Calls GetNodeExecutionData.
             * @param request NodeExecutionGetDataRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NodeExecutionGetDataResponse
             */
            public getNodeExecutionData(request: flyteidl.admin.INodeExecutionGetDataRequest, callback: flyteidl.service.AdminService.GetNodeExecutionDataCallback): void;

            /**
             * Calls GetNodeExecutionData.
             * @param request NodeExecutionGetDataRequest message or plain object
             * @returns Promise
             */
            public getNodeExecutionData(request: flyteidl.admin.INodeExecutionGetDataRequest): Promise<flyteidl.admin.NodeExecutionGetDataResponse>;

            /**
             * Calls RegisterProject.
             * @param request ProjectRegisterRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ProjectRegisterResponse
             */
            public registerProject(request: flyteidl.admin.IProjectRegisterRequest, callback: flyteidl.service.AdminService.RegisterProjectCallback): void;

            /**
             * Calls RegisterProject.
             * @param request ProjectRegisterRequest message or plain object
             * @returns Promise
             */
            public registerProject(request: flyteidl.admin.IProjectRegisterRequest): Promise<flyteidl.admin.ProjectRegisterResponse>;

            /**
             * Calls ListProjects.
             * @param request ProjectListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Projects
             */
            public listProjects(request: flyteidl.admin.IProjectListRequest, callback: flyteidl.service.AdminService.ListProjectsCallback): void;

            /**
             * Calls ListProjects.
             * @param request ProjectListRequest message or plain object
             * @returns Promise
             */
            public listProjects(request: flyteidl.admin.IProjectListRequest): Promise<flyteidl.admin.Projects>;

            /**
             * Calls CreateWorkflowEvent.
             * @param request WorkflowExecutionEventRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowExecutionEventResponse
             */
            public createWorkflowEvent(request: flyteidl.admin.IWorkflowExecutionEventRequest, callback: flyteidl.service.AdminService.CreateWorkflowEventCallback): void;

            /**
             * Calls CreateWorkflowEvent.
             * @param request WorkflowExecutionEventRequest message or plain object
             * @returns Promise
             */
            public createWorkflowEvent(request: flyteidl.admin.IWorkflowExecutionEventRequest): Promise<flyteidl.admin.WorkflowExecutionEventResponse>;

            /**
             * Calls CreateNodeEvent.
             * @param request NodeExecutionEventRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NodeExecutionEventResponse
             */
            public createNodeEvent(request: flyteidl.admin.INodeExecutionEventRequest, callback: flyteidl.service.AdminService.CreateNodeEventCallback): void;

            /**
             * Calls CreateNodeEvent.
             * @param request NodeExecutionEventRequest message or plain object
             * @returns Promise
             */
            public createNodeEvent(request: flyteidl.admin.INodeExecutionEventRequest): Promise<flyteidl.admin.NodeExecutionEventResponse>;

            /**
             * Calls CreateTaskEvent.
             * @param request TaskExecutionEventRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskExecutionEventResponse
             */
            public createTaskEvent(request: flyteidl.admin.ITaskExecutionEventRequest, callback: flyteidl.service.AdminService.CreateTaskEventCallback): void;

            /**
             * Calls CreateTaskEvent.
             * @param request TaskExecutionEventRequest message or plain object
             * @returns Promise
             */
            public createTaskEvent(request: flyteidl.admin.ITaskExecutionEventRequest): Promise<flyteidl.admin.TaskExecutionEventResponse>;

            /**
             * Calls GetTaskExecution.
             * @param request TaskExecutionGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskExecution
             */
            public getTaskExecution(request: flyteidl.admin.ITaskExecutionGetRequest, callback: flyteidl.service.AdminService.GetTaskExecutionCallback): void;

            /**
             * Calls GetTaskExecution.
             * @param request TaskExecutionGetRequest message or plain object
             * @returns Promise
             */
            public getTaskExecution(request: flyteidl.admin.ITaskExecutionGetRequest): Promise<flyteidl.admin.TaskExecution>;

            /**
             * Calls ListTaskExecutions.
             * @param request TaskExecutionListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskExecutionList
             */
            public listTaskExecutions(request: flyteidl.admin.ITaskExecutionListRequest, callback: flyteidl.service.AdminService.ListTaskExecutionsCallback): void;

            /**
             * Calls ListTaskExecutions.
             * @param request TaskExecutionListRequest message or plain object
             * @returns Promise
             */
            public listTaskExecutions(request: flyteidl.admin.ITaskExecutionListRequest): Promise<flyteidl.admin.TaskExecutionList>;

            /**
             * Calls GetTaskExecutionData.
             * @param request TaskExecutionGetDataRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskExecutionGetDataResponse
             */
            public getTaskExecutionData(request: flyteidl.admin.ITaskExecutionGetDataRequest, callback: flyteidl.service.AdminService.GetTaskExecutionDataCallback): void;

            /**
             * Calls GetTaskExecutionData.
             * @param request TaskExecutionGetDataRequest message or plain object
             * @returns Promise
             */
            public getTaskExecutionData(request: flyteidl.admin.ITaskExecutionGetDataRequest): Promise<flyteidl.admin.TaskExecutionGetDataResponse>;

            /**
             * Calls UpdateProjectDomainAttributes.
             * @param request ProjectDomainAttributesUpdateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ProjectDomainAttributesUpdateResponse
             */
            public updateProjectDomainAttributes(request: flyteidl.admin.IProjectDomainAttributesUpdateRequest, callback: flyteidl.service.AdminService.UpdateProjectDomainAttributesCallback): void;

            /**
             * Calls UpdateProjectDomainAttributes.
             * @param request ProjectDomainAttributesUpdateRequest message or plain object
             * @returns Promise
             */
            public updateProjectDomainAttributes(request: flyteidl.admin.IProjectDomainAttributesUpdateRequest): Promise<flyteidl.admin.ProjectDomainAttributesUpdateResponse>;

            /**
             * Calls GetProjectDomainAttributes.
             * @param request ProjectDomainAttributesGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ProjectDomainAttributesGetResponse
             */
            public getProjectDomainAttributes(request: flyteidl.admin.IProjectDomainAttributesGetRequest, callback: flyteidl.service.AdminService.GetProjectDomainAttributesCallback): void;

            /**
             * Calls GetProjectDomainAttributes.
             * @param request ProjectDomainAttributesGetRequest message or plain object
             * @returns Promise
             */
            public getProjectDomainAttributes(request: flyteidl.admin.IProjectDomainAttributesGetRequest): Promise<flyteidl.admin.ProjectDomainAttributesGetResponse>;

            /**
             * Calls DeleteProjectDomainAttributes.
             * @param request ProjectDomainAttributesDeleteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ProjectDomainAttributesDeleteResponse
             */
            public deleteProjectDomainAttributes(request: flyteidl.admin.IProjectDomainAttributesDeleteRequest, callback: flyteidl.service.AdminService.DeleteProjectDomainAttributesCallback): void;

            /**
             * Calls DeleteProjectDomainAttributes.
             * @param request ProjectDomainAttributesDeleteRequest message or plain object
             * @returns Promise
             */
            public deleteProjectDomainAttributes(request: flyteidl.admin.IProjectDomainAttributesDeleteRequest): Promise<flyteidl.admin.ProjectDomainAttributesDeleteResponse>;

            /**
             * Calls UpdateWorkflowAttributes.
             * @param request WorkflowAttributesUpdateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowAttributesUpdateResponse
             */
            public updateWorkflowAttributes(request: flyteidl.admin.IWorkflowAttributesUpdateRequest, callback: flyteidl.service.AdminService.UpdateWorkflowAttributesCallback): void;

            /**
             * Calls UpdateWorkflowAttributes.
             * @param request WorkflowAttributesUpdateRequest message or plain object
             * @returns Promise
             */
            public updateWorkflowAttributes(request: flyteidl.admin.IWorkflowAttributesUpdateRequest): Promise<flyteidl.admin.WorkflowAttributesUpdateResponse>;

            /**
             * Calls GetWorkflowAttributes.
             * @param request WorkflowAttributesGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowAttributesGetResponse
             */
            public getWorkflowAttributes(request: flyteidl.admin.IWorkflowAttributesGetRequest, callback: flyteidl.service.AdminService.GetWorkflowAttributesCallback): void;

            /**
             * Calls GetWorkflowAttributes.
             * @param request WorkflowAttributesGetRequest message or plain object
             * @returns Promise
             */
            public getWorkflowAttributes(request: flyteidl.admin.IWorkflowAttributesGetRequest): Promise<flyteidl.admin.WorkflowAttributesGetResponse>;

            /**
             * Calls DeleteWorkflowAttributes.
             * @param request WorkflowAttributesDeleteRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowAttributesDeleteResponse
             */
            public deleteWorkflowAttributes(request: flyteidl.admin.IWorkflowAttributesDeleteRequest, callback: flyteidl.service.AdminService.DeleteWorkflowAttributesCallback): void;

            /**
             * Calls DeleteWorkflowAttributes.
             * @param request WorkflowAttributesDeleteRequest message or plain object
             * @returns Promise
             */
            public deleteWorkflowAttributes(request: flyteidl.admin.IWorkflowAttributesDeleteRequest): Promise<flyteidl.admin.WorkflowAttributesDeleteResponse>;

            /**
             * Calls ListMatchableAttributes.
             * @param request ListMatchableAttributesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListMatchableAttributesResponse
             */
            public listMatchableAttributes(request: flyteidl.admin.IListMatchableAttributesRequest, callback: flyteidl.service.AdminService.ListMatchableAttributesCallback): void;

            /**
             * Calls ListMatchableAttributes.
             * @param request ListMatchableAttributesRequest message or plain object
             * @returns Promise
             */
            public listMatchableAttributes(request: flyteidl.admin.IListMatchableAttributesRequest): Promise<flyteidl.admin.ListMatchableAttributesResponse>;

            /**
             * Calls ListNamedEntities.
             * @param request NamedEntityListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NamedEntityList
             */
            public listNamedEntities(request: flyteidl.admin.INamedEntityListRequest, callback: flyteidl.service.AdminService.ListNamedEntitiesCallback): void;

            /**
             * Calls ListNamedEntities.
             * @param request NamedEntityListRequest message or plain object
             * @returns Promise
             */
            public listNamedEntities(request: flyteidl.admin.INamedEntityListRequest): Promise<flyteidl.admin.NamedEntityList>;

            /**
             * Calls GetNamedEntity.
             * @param request NamedEntityGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NamedEntity
             */
            public getNamedEntity(request: flyteidl.admin.INamedEntityGetRequest, callback: flyteidl.service.AdminService.GetNamedEntityCallback): void;

            /**
             * Calls GetNamedEntity.
             * @param request NamedEntityGetRequest message or plain object
             * @returns Promise
             */
            public getNamedEntity(request: flyteidl.admin.INamedEntityGetRequest): Promise<flyteidl.admin.NamedEntity>;

            /**
             * Calls UpdateNamedEntity.
             * @param request NamedEntityUpdateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NamedEntityUpdateResponse
             */
            public updateNamedEntity(request: flyteidl.admin.INamedEntityUpdateRequest, callback: flyteidl.service.AdminService.UpdateNamedEntityCallback): void;

            /**
             * Calls UpdateNamedEntity.
             * @param request NamedEntityUpdateRequest message or plain object
             * @returns Promise
             */
            public updateNamedEntity(request: flyteidl.admin.INamedEntityUpdateRequest): Promise<flyteidl.admin.NamedEntityUpdateResponse>;
        }

        namespace AdminService {

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createTask}.
             * @param error Error, if any
             * @param [response] TaskCreateResponse
             */
            type CreateTaskCallback = (error: (Error|null), response?: flyteidl.admin.TaskCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getTask}.
             * @param error Error, if any
             * @param [response] Task
             */
            type GetTaskCallback = (error: (Error|null), response?: flyteidl.admin.Task) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listTaskIds}.
             * @param error Error, if any
             * @param [response] NamedEntityIdentifierList
             */
            type ListTaskIdsCallback = (error: (Error|null), response?: flyteidl.admin.NamedEntityIdentifierList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listTasks}.
             * @param error Error, if any
             * @param [response] TaskList
             */
            type ListTasksCallback = (error: (Error|null), response?: flyteidl.admin.TaskList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createWorkflow}.
             * @param error Error, if any
             * @param [response] WorkflowCreateResponse
             */
            type CreateWorkflowCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getWorkflow}.
             * @param error Error, if any
             * @param [response] Workflow
             */
            type GetWorkflowCallback = (error: (Error|null), response?: flyteidl.admin.Workflow) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listWorkflowIds}.
             * @param error Error, if any
             * @param [response] NamedEntityIdentifierList
             */
            type ListWorkflowIdsCallback = (error: (Error|null), response?: flyteidl.admin.NamedEntityIdentifierList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listWorkflows}.
             * @param error Error, if any
             * @param [response] WorkflowList
             */
            type ListWorkflowsCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createLaunchPlan}.
             * @param error Error, if any
             * @param [response] LaunchPlanCreateResponse
             */
            type CreateLaunchPlanCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlanCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getLaunchPlan}.
             * @param error Error, if any
             * @param [response] LaunchPlan
             */
            type GetLaunchPlanCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlan) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getActiveLaunchPlan}.
             * @param error Error, if any
             * @param [response] LaunchPlan
             */
            type GetActiveLaunchPlanCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlan) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listActiveLaunchPlans}.
             * @param error Error, if any
             * @param [response] LaunchPlanList
             */
            type ListActiveLaunchPlansCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlanList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listLaunchPlanIds}.
             * @param error Error, if any
             * @param [response] NamedEntityIdentifierList
             */
            type ListLaunchPlanIdsCallback = (error: (Error|null), response?: flyteidl.admin.NamedEntityIdentifierList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listLaunchPlans}.
             * @param error Error, if any
             * @param [response] LaunchPlanList
             */
            type ListLaunchPlansCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlanList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#updateLaunchPlan}.
             * @param error Error, if any
             * @param [response] LaunchPlanUpdateResponse
             */
            type UpdateLaunchPlanCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlanUpdateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createExecution}.
             * @param error Error, if any
             * @param [response] ExecutionCreateResponse
             */
            type CreateExecutionCallback = (error: (Error|null), response?: flyteidl.admin.ExecutionCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#relaunchExecution}.
             * @param error Error, if any
             * @param [response] ExecutionCreateResponse
             */
            type RelaunchExecutionCallback = (error: (Error|null), response?: flyteidl.admin.ExecutionCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getExecution}.
             * @param error Error, if any
             * @param [response] Execution
             */
            type GetExecutionCallback = (error: (Error|null), response?: flyteidl.admin.Execution) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getExecutionData}.
             * @param error Error, if any
             * @param [response] WorkflowExecutionGetDataResponse
             */
            type GetExecutionDataCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowExecutionGetDataResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listExecutions}.
             * @param error Error, if any
             * @param [response] ExecutionList
             */
            type ListExecutionsCallback = (error: (Error|null), response?: flyteidl.admin.ExecutionList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#terminateExecution}.
             * @param error Error, if any
             * @param [response] ExecutionTerminateResponse
             */
            type TerminateExecutionCallback = (error: (Error|null), response?: flyteidl.admin.ExecutionTerminateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getNodeExecution}.
             * @param error Error, if any
             * @param [response] NodeExecution
             */
            type GetNodeExecutionCallback = (error: (Error|null), response?: flyteidl.admin.NodeExecution) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listNodeExecutions}.
             * @param error Error, if any
             * @param [response] NodeExecutionList
             */
            type ListNodeExecutionsCallback = (error: (Error|null), response?: flyteidl.admin.NodeExecutionList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listNodeExecutionsForTask}.
             * @param error Error, if any
             * @param [response] NodeExecutionList
             */
            type ListNodeExecutionsForTaskCallback = (error: (Error|null), response?: flyteidl.admin.NodeExecutionList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getNodeExecutionData}.
             * @param error Error, if any
             * @param [response] NodeExecutionGetDataResponse
             */
            type GetNodeExecutionDataCallback = (error: (Error|null), response?: flyteidl.admin.NodeExecutionGetDataResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#registerProject}.
             * @param error Error, if any
             * @param [response] ProjectRegisterResponse
             */
            type RegisterProjectCallback = (error: (Error|null), response?: flyteidl.admin.ProjectRegisterResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listProjects}.
             * @param error Error, if any
             * @param [response] Projects
             */
            type ListProjectsCallback = (error: (Error|null), response?: flyteidl.admin.Projects) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createWorkflowEvent}.
             * @param error Error, if any
             * @param [response] WorkflowExecutionEventResponse
             */
            type CreateWorkflowEventCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowExecutionEventResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createNodeEvent}.
             * @param error Error, if any
             * @param [response] NodeExecutionEventResponse
             */
            type CreateNodeEventCallback = (error: (Error|null), response?: flyteidl.admin.NodeExecutionEventResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createTaskEvent}.
             * @param error Error, if any
             * @param [response] TaskExecutionEventResponse
             */
            type CreateTaskEventCallback = (error: (Error|null), response?: flyteidl.admin.TaskExecutionEventResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getTaskExecution}.
             * @param error Error, if any
             * @param [response] TaskExecution
             */
            type GetTaskExecutionCallback = (error: (Error|null), response?: flyteidl.admin.TaskExecution) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listTaskExecutions}.
             * @param error Error, if any
             * @param [response] TaskExecutionList
             */
            type ListTaskExecutionsCallback = (error: (Error|null), response?: flyteidl.admin.TaskExecutionList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getTaskExecutionData}.
             * @param error Error, if any
             * @param [response] TaskExecutionGetDataResponse
             */
            type GetTaskExecutionDataCallback = (error: (Error|null), response?: flyteidl.admin.TaskExecutionGetDataResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#updateProjectDomainAttributes}.
             * @param error Error, if any
             * @param [response] ProjectDomainAttributesUpdateResponse
             */
            type UpdateProjectDomainAttributesCallback = (error: (Error|null), response?: flyteidl.admin.ProjectDomainAttributesUpdateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getProjectDomainAttributes}.
             * @param error Error, if any
             * @param [response] ProjectDomainAttributesGetResponse
             */
            type GetProjectDomainAttributesCallback = (error: (Error|null), response?: flyteidl.admin.ProjectDomainAttributesGetResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#deleteProjectDomainAttributes}.
             * @param error Error, if any
             * @param [response] ProjectDomainAttributesDeleteResponse
             */
            type DeleteProjectDomainAttributesCallback = (error: (Error|null), response?: flyteidl.admin.ProjectDomainAttributesDeleteResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#updateWorkflowAttributes}.
             * @param error Error, if any
             * @param [response] WorkflowAttributesUpdateResponse
             */
            type UpdateWorkflowAttributesCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowAttributesUpdateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getWorkflowAttributes}.
             * @param error Error, if any
             * @param [response] WorkflowAttributesGetResponse
             */
            type GetWorkflowAttributesCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowAttributesGetResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#deleteWorkflowAttributes}.
             * @param error Error, if any
             * @param [response] WorkflowAttributesDeleteResponse
             */
            type DeleteWorkflowAttributesCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowAttributesDeleteResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listMatchableAttributes}.
             * @param error Error, if any
             * @param [response] ListMatchableAttributesResponse
             */
            type ListMatchableAttributesCallback = (error: (Error|null), response?: flyteidl.admin.ListMatchableAttributesResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listNamedEntities}.
             * @param error Error, if any
             * @param [response] NamedEntityList
             */
            type ListNamedEntitiesCallback = (error: (Error|null), response?: flyteidl.admin.NamedEntityList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getNamedEntity}.
             * @param error Error, if any
             * @param [response] NamedEntity
             */
            type GetNamedEntityCallback = (error: (Error|null), response?: flyteidl.admin.NamedEntity) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#updateNamedEntity}.
             * @param error Error, if any
             * @param [response] NamedEntityUpdateResponse
             */
            type UpdateNamedEntityCallback = (error: (Error|null), response?: flyteidl.admin.NamedEntityUpdateResponse) => void;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: Long;

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: Long;

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: Long;

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }
}
